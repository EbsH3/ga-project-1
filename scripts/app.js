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

  const audio = document.getElementById("themesong");
  audio.play();

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

    // if (
    //   cells[event.target.dataset.index].classList.contains("batman") ||
    //   ("joker"); {
    //   alert("This slot is taken. Try again");
    // } else {
    //   handleClick(event);
    // }
  }

  // function playAudio(event) {
  //   audio.src = `../assets/audio/${event.target.classList}.wav`;
  //   playAudio();
  // }

  function muteSound() {
    audio.pause();
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
    [36, 37, 38, 39],
    [37, 38, 39, 40],
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
    [41, 33, 25, 17],
    [40, 32, 24, 16],
    [39, 31, 23, 15],
    [38, 30, 22, 14],
    [36, 30, 24, 18],
    [35, 29, 23, 17],
    [28, 22, 16, 10],
    [21, 15, 9, 3],
    [24, 18, 12, 6],
    [23, 17, 11, 5],
    [22, 16, 10, 4],
    [34, 26, 18, 10],
    [31, 23, 15, 7],
    [24, 16, 8, 0],
    [25, 17, 9, 1],
    [27, 19, 11, 3],
    [30, 24, 18, 12],
    [2, 3, 4, 5],
    [1, 2, 3, 4],
    [38, 32, 26, 20],
    [37, 31, 25, 19],
    [31, 25, 19, 13],
    [29, 23, 17, 11],
    [30, 23, 16, 9],
    [31, 24, 17, 10],
    [32, 25, 18, 11],
    [33, 26, 19, 12],
    [34, 27, 20, 13],
    [29, 22, 15, 8],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [13, 19, 25, 21],
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
        const bmAudio = new Audio("../assets/audio/batman.wav");
        bmAudio.play();
      } else {
        winnerDisplay.innerHTML = "The J0ker lives to see another day!";
        winnerDisplay.style.color = "white";
        const jkAudio = new Audio("../assets/audio/joker.wav");
        jkAudio.play();
      }
      gameOver = true;
      setTimeout(resetGame, 2000);
    }
  }

  createGrid();

  // Array.from(grid).forEach((cell) => {
  //   cell.addEventListener("click", playAudio);
  // });
}

document.addEventListener("DOMContentLoaded", init);
