function init() {
  const playerOne = "batman";
  const playerTwo = "joker";
  let isPlayerOne = true;
  const grid = document.querySelector(".grid");
  const resetBtn = document.querySelector(".reset");
  const winnerDisplay = document.getElementsByClassName("winnerdisplay");
  const gridCount = 6 * 7;
  const cells = [];
  let currentPlayer = playerOne;

  function createGrid() {
    for (let index = 0; index < gridCount; index++) {
      const cell = document.createElement("div");
      cell.setAttribute("data-index", index);
      cell.addEventListener("click", handleClick);
      cells.push(cell);
      grid.appendChild(cell);
      console.log([index]);
    }
  }

  function handleClick(event) {
    const className = isPlayerOne ? playerOne : playerTwo;
    event.target.classList.add(className);
    isPlayerOne = !isPlayerOne;
  }

  // const winnerCombo = [
  //   [35, 36, 37, 38],
  //   [38, 39, 40, 41],
  //   [28, 29, 30, 31],
  //   [31, 32, 33, 34],
  //   [21, 22, 23, 24],
  //   [24, 25, 26, 27],
  //   [14, 15, 16, 17],
  //   [18, 19, 20, 21],
  //   [7, 8, 9, 10],
  //   [10, 11, 12, 13],
  //   [0, 1, 2, 3],
  //   [3, 4, 5, 6],
  //   [0, 7, 14, 21],
  //   [14, 21, 28, 35],
  //   [1, 8, 15, 22],
  //   [15, 22, 29, 36],
  //   [2, 9, 16, 23],
  //   [16, 23, 30, 37],
  //   [3, 10, 17, 24],
  //   [17, 24, 31, 38],
  //   [4, 11, 18, 25],
  //   [18, 25, 32, 39],
  //   [5, 12, 19, 26],
  //   [19, 26, 33, 40],
  //   [6, 13, 20, 27],
  //   [20, 27, 34, 41],
  //   [7, 14, 21, 28],
  //   [21, 28, 35, 42]
  // ];

  // function checkWinner() {
  //   for (let index = 0; index < winnerCombo.length; index++) {
  //     const index1 = grid[winnerCombo[index][0]];
  //     const index2 = grid[winnerCombo[index][1]];
  //     const index3 = grid[winnerCombo[index][2]];
  //     const index4 = grid[winnerCombo[index][3]];
  //   }
  //   if (index1.classList.contains("batman") && index2.classList.contains("batman") && index3.classList.contains("batman") && index4.classList.contains("batman"), winnerDisplay.innerHTML = "Batman saves Gotham!";
  // return;
  // } else if (index1.classList.contains("joker") && index2.classList.contains("joker") && index3.classList.contains("joker") && index4.classList.contains("joker"), winnerDisplay.innerHTML = "The Joker Wins!"); return;

  // resetBtn.addEventListener("click", ()=>(cell.forEach(cell =>forEach((cell) => cell.addEventListener("click", addPlayer))
  createGrid();
}

document.addEventListener("DOMContentLoaded", init);
