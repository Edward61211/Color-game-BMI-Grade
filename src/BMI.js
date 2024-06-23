"use strict";

result3.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function calculate() {
  //   const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const result3 = document.getElementById("result3");
  const image = document.getElementById("image");

  if (
    height[0] == 0 ||
    weight[0] == 0 ||
    height === " " ||
    weight === " " ||
    isNaN(height) ||
    isNaN(weight) ||
    height <= 0 ||
    weight <= 0
  ) {
    alert("Please enter valid values");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  document.getElementById("result").innerText = bmi.toFixed(2);

  const commentElement = document.querySelector(".comment");
  if (bmi < 18.5) {
    commentElement.innerText = "Underweight";
    commentElement.classList.remove("hidden");
    result1.innerText = "Skinny Cat";
    result2.innerText = "Try to eat more!";
    result3.innerText = "🙁";
    image.src =
      "https://i.pinimg.com/1200x/f6/bf/18/f6bf1832030953d9f9beef70dbb01b7f.jpg";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    commentElement.innerText = "Normal weight";
    commentElement.classList.remove("hidden");
    result1.innerText = "Healthy Cat";
    result2.innerText = "Keep it up!";
    result3.innerText = "😊";
    image.src =
      "https://bestfriendnutrition.com/wp-content/uploads/2019/06/cat_m3_cat_outside_1-1536x672.jpg";
  } else if (bmi >= 25 && bmi < 29.9) {
    commentElement.innerText = "Overweight";
    commentElement.classList.remove("hidden");
    result1.innerText = "Fat Cat";
    result2.innerText = "Try to eat less!";
    result3.innerText = "😞";
    image.src =
      "https://vetforcatsonly.com/wp-content/uploads/2019/12/IMG_0579-300x225-1.jpg";
  } else {
    commentElement.innerText = "Obesity";
    commentElement.classList.remove("hidden");
    result1.innerText = "Super Fat Cat";
    result2.innerText = "Drop Dead!";
    result3.innerText = "💀";
    image.src =
      "https://img.freepik.com/free-photo/view-comical-scene-with-cat_23-2151087426.jpg";
  }
}
