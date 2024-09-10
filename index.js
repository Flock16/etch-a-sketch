const container = document.querySelector(".container");
const rangeSelector = document.querySelector(".range");
const rangeSelected = document.querySelector(".range-selected");
const rainbowButton = document.querySelector(".rainbowButton");
const colorWheel = document.querySelector(".colorWheel");
let rainbow = false;

rangeSelector.addEventListener("input", (event) => {
  clearGrid();
  rangeSelected.textContent = event.target.value + "x" + event.target.value;
  createGrid(event.target.value, rainbow ? "rainbow" : colorWheel.value);
});

const addListener = (element, color) => {
  element.addEventListener(
    "mouseenter",
    (event) => {
      let target = event.target;
      color === "rainbow"
        ? (target.style.backgroundColor = randomColor())
        : (target.style.backgroundColor = color);
    },
    { once: true }
  );
};

const randomColor = (() => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return () => {
    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
  };
})();

const clearGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
};

const createGrid = (size, color) => {
  // Create Row
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    // Create Cells in row
    for (let i = 0; i < size; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      addListener(cell, color);
      row.appendChild(cell);
    }
  }
};

rainbowButton.addEventListener("click", () => {
  clearGrid();
  rainbow = true;
  createGrid(rangeSelector.value, "rainbow");
});

colorWheel.addEventListener("input", (event) => {
  clearGrid();
  rainbow = false;
  createGrid(rangeSelector.value, event.target.value);
});

createGrid(rangeSelector.value, "rgb(0, 0, 0)");
rangeSelected.textContent = rangeSelector.value + "x" + rangeSelector.value;
