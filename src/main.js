import data from "./data";

import "./style.css";

const button = document.querySelector("button");
const nameDisplay = document.querySelector("p");
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  nameDisplay.textContent =
    data[getRandomIntInclusive(0, data.length - 1)].name;
});

darkButton.addEventListener("change", () => {
  body.classList.remove("bg-gray-100");
  body.classList.add("bg-gray-800", "text-white");
});

lightButton.addEventListener("change", () => {
  body.classList.remove("bg-gray-800", "text-white");
  body.classList.add("bg-gray-100");
});

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
