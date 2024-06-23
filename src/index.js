"use strict";
const Chinese = document.getElementById("input1");
const English = document.getElementById("input2");
const Math = document.getElementById("input3");
const Physics = document.getElementById("input4");
const Chemistry = document.getElementById("input5");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");

function UserGrades() {
  let grades = [
    parseFloat(Chinese.value),
    parseFloat(English.value),
    parseFloat(Math.value),
    parseFloat(Physics.value),
    parseFloat(Chemistry.value),
  ];

  let weights = [0.4, 0.6, 0.4, 1.2, 0.8];

  // Average
  const sum = grades.reduce((a, b) => a + b, 0);
  const average = sum / grades.length;

  // Weighted Average
  const weightedSum = grades.reduce((a, b, i) => a + b * weights[i], 0);
  const weightedAvg = weightedSum / weights.reduce((a, b) => a + b, 0);

  // Pass/Fail
  let passFail = weightedAvg >= 60 ? "Pass" : "Fail";

  // Letter Grade
  let letterGrade;
  if (weightedAvg >= 90) {
    letterGrade = "A";
  } else if (weightedAvg >= 80) {
    letterGrade = "B";
  } else if (weightedAvg >= 70) {
    letterGrade = "C";
  } else if (weightedAvg >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return { average, weightedAvg, passFail, letterGrade };
}

function displayResults() {
  const result = UserGrades();
  // if user input is less than 0 or greater than 100 show error

  if (result.average < 0 || result.average > 100) {
    alert("Error: Please enter a number between 0 and 100");
    return;
  }

  output1.textContent = `Average: ${result.average.toFixed(2)}`;
  output2.textContent = `Weighted Average: ${result.weightedAvg.toFixed(2)}`;
  output3.textContent = `Pass/Fail: ${result.passFail}`;
  output4.textContent = `Letter Grade: ${result.letterGrade}`;
}

// Button to trigger the calculation
document
  .getElementById("calculateButton")
  .addEventListener("click", displayResults);

// limit user only input numeric value
function validateInput(textarea) {
  textarea.value = textarea.value.replace(/[^0-9]/g, "");
}

let gradesA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(gradesA.reduce((a, b) => a * b, 1));

console.log(gradesA.reduce((a, b) => a - b / 2, 0));
