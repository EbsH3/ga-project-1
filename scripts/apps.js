const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("result");
const displayCurrentPlayer = document.querySelector("current-player");
const winnerdisplay
let currentPlayer = 1;

// const winningArray = ['']

for (let index = 1; index < squares.length; index++) {
squares[i].onclick = () => {
  alert{'you have clicked a square'}
  if (currentPlayer === 1) {
squares[i].classList.add('taken')
squares[i].classList.add('player-one')
currentPlayer = 2
displayCurrentPlayer.innerHTML = currentPlayer    
  }
}  

  else if (currentPlayer === 2) {
squares[i].classList.add('taken')
squares[i].classList.add('player-two')
currentPlayer = 1
displayCurrentPlayer.innerHTML = currentPlayer    
  }
  function checkScore(){
    for (let index = 0; index < winningArray.length; index++) {
      const element = array[index];
      
    if (square1.classList.contained("player-one")
square2.classList.contained("player-one")square3.classList.contained("player-one")square4.classList.contained("player-one")
  }
  result.innerHTML = "player one wins"

      if (square1.classList.contains("player-two")
square2.classList.contained("player-two")square3.classList.contained("player-two")square4.classList.contained("player-two")
  }
  result.innerHTML = "player two wins"
    }





  
  for (let i=0; 1 < grid.length; i++) {
    grid[i].onclick = ( => {
      if (currentPlayer == 1) {
        grid[i].classList.add('batman')
        currentPlayer = 2
      }
      if(currentPlayer == 2){
        squares[i].classList.add("joker")
        currentPlayer = 2
      }
    })
  }


    // function checkWinner() {
  //   for (let index = 0; index < winnerCombo.length; index++) {
  //     const index1 = grid[winnerCombo[index][0, 1, 2, 3]];
  //     // const index2 = grid[winnerCombo[index][1]];
  //     // const index3 = grid[winnerCombo[index][2]];
  //     // const index4 = grid[winnerCombo[index][3]];
  //   }
  //   if (index1.classList.contains("batman")
  //   //  && index2.classList.contains("batman") && index3.classList.contains("batman") && index4.classList.contains("batman"),
  //   winnerDisplay.innerHTML = "Batman saves Gotham!";

  // } else {(index1.classList.contains("joker") && index2.classList.contains("joker") && index3.classList.contains("joker") && index4.classList.contains("joker"), winnerDisplay.innerHTML = "The Joker Wins!")};

  // resetBtn.addEventListener("click", ()=>(cell.forEach(cell =>forEach((cell) => cell.addEventListener("click", addPlayer))