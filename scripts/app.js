function init() {
  const playerOne = "batman";
  const playerTwo = "joker";
  let isPlayerOne = true;
  const grid = document.querySelector(".grid");
  const resetBtn = document.querySelector(".reset");
  // const audio = document.querySelector("#audio");
  const muteBtn = document.querySelector(".muteBtn");
  const winnerDisplay = document.querySelector(".winnerdisplay");
  let gameOver = false;

  const audio = document.getElementById("themesong").play();

  const width = 7;
  const height = 6;
  const gridCount = height * width;

  const cells = [];

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
    checkWinner();
  }

  // function playAudio(event) {
  //   audio.src = `../assets/audio/${event.target.classList}.wav`;
  //   playAudio();
  // }

  function muteSound() {
    audio.muted = true;
  }
  muteBtn.addEventListener("click", muteSound);

  function resetGame() {
    grid.classList.remove("batman");
    grid.classList.remove("joker");
    location.reload();
  }

  resetBtn.addEventListener("click", resetGame);

  const winnerCombo = [
    [35, 36, 37, 38],
    [38, 39, 40, 41],
    [28, 29, 30, 31],
    [31, 32, 33, 34],
    [21, 22, 23, 24],
    [24, 25, 26, 27],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [7, 8, 9, 10],
    [10, 11, 12, 13],
    [0, 1, 2, 3],
    [3, 4, 5, 6],
    [0, 7, 14, 21],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [20, 27, 34, 41],
    [7, 14, 21, 28],
    [21, 28, 35, 42],
  ];

  function checkWinner() {
    let winner = false;
    winnerCombo.forEach((array) => {
      if (array.every((i) => cells[i].classList.contains("batman"))) {
        winner = playerOne;
        return;
      }
      if (array.every((i) => cells[i].classList.contains("joker"))) {
        winner = playerTwo;
        return;
      }
    });
    if (winner) {
      if (winner === playerOne) {
        winnerDisplay.innerHTML = "Batman saves Gotham";
        winnerDisplay.style.color = "white";
      } else {
        winnerDisplay.innerHTML = "The J0ker lives to see another day!";
        winnerDisplay.style.color = "white";
      }
      gameOver = true;
      setTimeout(resetGame, 3000);
    }
  }

  createGrid();

  // Array.from(grid).forEach((cell) => {
  //   cell.addEventListener("click", playAudio);
  // });
}

document.addEventListener("DOMContentLoaded", init);
