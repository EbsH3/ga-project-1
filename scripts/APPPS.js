const player1 = "Batman";
const player2 = "Joker";
let currentPlayer = player1;

const gameOver = false;
const board;
const rows = 6;
columns = 7;
let currentColumn = ;

windlow.onload = function() {
  resetGame();
}

function resetGame() {
  board = [];

  for (let index = 0; index < rows; index++) {
    
    for (let index = 0; index < columns; index++) {
rows.push(' ');
      
    }
    cell.id = batman.toString() + "-" + Joker.toString();
    cell.classList.add("cell")
  }
}

cell.addEventListener("click", setPiece);

function setPiece(){
  if (gameOver) {
    return;
 
 let coord = this.id.split("-");
 let batman = parseInt(coord[0]);
let joker = parseiNT(coord[1])}

board[batman][joker] = currPlayer;
let title = this;
if (currPlayer == batman) {
  this.classList.add('batman')
} else {
  title.classList.add('joker')
}

}

function checkWinner();{
  for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns - 3; column++)
      if (board[row][column] != '') { if (board[row][column] = board[row][column+1] && board [row][c+1] == board [r][c+2] && board [r][c+2] == board [r][c+3])
setWinner(r, c);
return;        
      } 
      
      function getWinner(r, c){
        let win = document.getElementById('winner');
        if (board[r][c] = player batman) { 
          getWinner.innerHTML = "Batman wins"
        } else {winner.innerHTML = "Joker wins"}
  }
  gameOver = true;
}

grid:


function init() {
  const grid = document.querySelector(".grid div");
  const winnerdisplay = document.querySelector(".winnerdisplay");
  let currentPlayer = 1;

  const gridCount = 6 * 7;
  const cells = [];

  function createGrid() {
    for (let index = 0; index < gridCount; index++) {
      const cell = document.createElement("div");
      cell.setAttribute("data-index", index);
      cells.push(cell[index]);
      grid.appendChild(cell);

      console.log([index]);
    }
  }

  function addPlayer(event) {
    cells[event.target.dataset.index].classList.add("player");
  }

  createGrid();
}

document.addEventListener("DOMContentLoaded", init);









lloool
function init() {
  const grid = document.querySelector(".grid");

  const gridCount = 6 * 7;
  const cells = [];

  function createGrid() {
    for (let index = 0; index < gridCount; index++) {
      const cell = document.createElement("div");
      cell.setAttribute("data-index", index);
      cells.push(cell);
      grid.appendChild(cell);
      console.log([index]);
    }
  }

  function addPlayer(event) {
    cells[event.target.dataset.index].classList.add("player");
  }

  createGrid();
}

document.addEventListener("DOMContentLoaded", init);