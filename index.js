const container = document.querySelector(".container");

// let block = document.createElement("div");
// block.classList.add("block");

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
};

createGrid(16);
