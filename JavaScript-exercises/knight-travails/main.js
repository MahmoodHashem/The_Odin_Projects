const boardElement = document.getElementById("board");
     
const sideNumbers = document.querySelector(".side-numbers");
const bottomNumbers = document.querySelector(".bottom-numbers");
const message = document.querySelector('.message')

let start = null;
let end = null;

const knightImage = document.createElement("img");
knightImage.src = "./img/knight.png";

// Create an 8x8 Chessboard
for (let i = 7; i >= 0; i--) {
  const sideNumber = document.createElement("p");
  const bottomNumber = document.createElement("p");
  sideNumber.innerHTML = i;
  bottomNumber.innerHTML = i;

  sideNumbers.appendChild(sideNumber);
  bottomNumbers.appendChild(bottomNumber);

  for (let j = 0; j < 8; j++) {
    const square = document.createElement("div");

    square.classList.add("square");
    if ((i + j) % 2 !== 0) {
      square.classList.add("dark");
    }
    square.dataset.position = `${i},${j}`;

    square.addEventListener("click", () => handleSquareClick(i, j));
    boardElement.appendChild(square);
  }
}

function handleSquareClick(x, y) {
  if (!start) {
    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("highlight");
    });
    // Set the starting position
    start = [x, y];
    const knightSquare = document.querySelector(
      `.square[data-position="${x},${y}"]`
    );

    knightSquare.appendChild(knightImage);
    message.innerHTML = "Choose where to move your Knight 🐴"
     // Enable the button
  } else {
    // Set the ending position
    end = [x, y];
    findPath(); // Call the findPath function
  }
}

function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const isValidMove = (pos) =>
    pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;

  const queue = [[start, [start]]]; // stores [current position, path taken]
  const visited = new Set();

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      return path; // return the path when we reach the end
    }

    for (const [dx, dy] of directions) {
      const nextMove = [current[0] + dx, current[1] + dy];
      if (isValidMove(nextMove) && !visited.has(nextMove.toString())) {
        visited.add(nextMove.toString());
        queue.push([nextMove, [...path, nextMove]]);
      }
    }
  }
  return []; // return an empty array if no path is found
}

function findPath() {
  if (!start || !end) return;

  const path = knightMoves(start, end);

  // Clear previous highlights
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("highlight");
  });

  // Highlight the path
  path.forEach(([x, y], i) => {
   
    const square = document.querySelector(
      `.square[data-position="${x},${y}"]`
    );
    
    if(path[i] !== start){
      if (square) {
        square.classList.add("highlight");
        square.dataset.steps = i; 
      }
  }
  });


  resetGame();
}

function resetGame() {
  start = null;
  end = null;
  message.innerHTML = "Position your Knight!"
}