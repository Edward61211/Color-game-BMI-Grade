"use strict";

alert("🚨Welcome to Color Game! Click OK to start!");

const grid = document.querySelector(".grid");
let col = 2;
let row = 2;
let level = 2;

removeBox();
addBox(row, col, level);

grid.addEventListener("click", (event) => {
  const clickedBox = event.target.closest(".box");

  if (clickedBox) {
    if (clickedBox.classList.contains(`opacity-${opacityValue(level)}`)) {
      col++;
      row++;
      level++;

      const levelBtn = document.getElementById("level-btn");
      levelBtn.textContent = `Game Level ${level} x ${level}`;
      grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;

      removeBox();
      addBox(row, col, level);
    } else {
      col = 2;
      row = 2;
      level = 2;
      const levelBtn = document.getElementById("level-btn");
      levelBtn.textContent = `Game Level ${level} x ${level}`;
      grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;
      removeBox();
      addBox(row, col, level);
    }
  } else return;
});

function removeBox() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((div) => {
    div.remove();
  });
}

function random() {
  const color = [
    "bg-slate-300",
    "bg-slate-400",
    "bg-slate-500",
    "bg-slate-600",
    "bg-slate-700",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-stone-300",
    "bg-stone-400",
    "bg-stone-500",
    "bg-stone-600",
    "bg-stone-700",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-600",
    "bg-orange-700",
    "bg-rose-300",
    "bg-rose-400",
    "bg-rose-500",
    "bg-rose-600",
    "bg-rose-700",
    "bg-amber-300",
    "bg-amber-400",
    "bg-amber-500",
    "bg-amber-600",
    "bg-amber-700",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-lime-300",
    "bg-lime-400",
    "bg-lime-500",
    "bg-lime-600",
    "bg-lime-700",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-emerald-300",
    "bg-emerald-400",
    "bg-emerald-500",
    "bg-emerald-600",
    "bg-emerald-700",
    "bg-teal-300",
    "bg-teal-400",
    "bg-teal-500",
    "bg-teal-600",
    "bg-teal-700",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-cyan-300",
    "bg-cyan-400",
    "bg-cyan-500",
    "bg-cyan-600",
    "bg-cyan-700",
    "bg-sky-300",
    "bg-sky-400",
    "bg-sky-500",
    "bg-sky-600",
    "bg-sky-700",
    "bg-indigo-300",
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
    "bg-violet-300",
    "bg-violet-400",
    "bg-violet-500",
    "bg-violet-600",
    "bg-violet-700",
    "bg-purple-300",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
    "bg-fuchsia-300",
    "bg-fuchsia-400",
    "bg-fuchsia-500",
    "bg-fuchsia-600",
    "bg-fuchsia-700",
    "bg-pink-300",
    "bg-pink-400",
    "bg-pink-500",
    "bg-pink-600",
    "bg-pink-700",
  ];
  const index = Math.floor(Math.random() * color.length);
  const randomColor = color[index];
  return randomColor;
}

function opacityValue(level) {
  const baseOpacity = 40;
  const increaseOpacityBy = 10;
  return Math.min(baseOpacity + level * increaseOpacityBy, 90);
}

function addBox(row, col, level) {
  const randomColor = random();
  const iterations = row * col;
  const selectedBoxIndex = Math.floor(Math.random() * iterations);
  const opacityGetValue = opacityValue(level);

  console.log("level: ", level, "opacity: ", opacityGetValue);
  console.log("Answer Box Number: ", `${selectedBoxIndex + 1}`);

  for (let i = 0; i < iterations; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("box", `${randomColor}`, "rounded-lg");
    gridBox.id = `box${i + 1}`;
    if (i === selectedBoxIndex) {
      gridBox.classList.add(`opacity-${opacityGetValue}`);

      const answerBtn = document.getElementById("answer-btn");
      answerBtn.addEventListener("click", () => {
        gridBox.classList.remove(randomColor);
        gridBox.classList.add("bg-black");
      });
    }
    grid.appendChild(gridBox);
  }
}

let countDownDate =
  new Date().getTime() +
  10 * 24 * 60 * 60 * 1000 +
  10 * 60 * 60 * 1000 +
  11 * 60 * 1000 +
  1000;

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").style.setProperty("--value", days);
  document.getElementById("hours").style.setProperty("--value", hours);
  document.getElementById("minutes").style.setProperty("--value", minutes);
  document.getElementById("seconds").style.setProperty("--value", seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").style.setProperty("--value", 0);
    document.getElementById("hours").style.setProperty("--value", 0);
    document.getElementById("minutes").style.setProperty("--value", 0);
    document.getElementById("seconds").style.setProperty("--value", 0);
  }
}, 1000);

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
