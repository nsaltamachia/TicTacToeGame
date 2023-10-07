/*----- constants -----*/
const player1 = [1, "X"]
const player2 = [-1, "O"]
let currentPlayer = 1;
let winner = null;
let turnsLeft = 9;
const cells = document.querySelectorAll(".cell")

/*----- state variables -----*/


/*----- cached elements  -----*/
const gameBoardElement = document.querySelectorAll(".cell");
const messageElement = document.querySelector(".message");
const resetButtonElement = document.querySelector("#resetButton");

/*----- event listeners -----*/
// iterate (forEach) over the gameBoard element
//forEach cell, add event listener ("click" function(e))

gameBoardElement.forEach(function (cell) {
  cell.addEventListener("click", function () {
    turnsLeft--;
    console.log(turnsLeft);
    if (cell.innerText === "") {

      if (currentPlayer === 1) {
        cell.innerHTML = player1[1];
        cell.style.fontFamily = "Londrina Shadow";
        cell.style.fontSize = "100px"
        checkWinner();
        currentPlayer = -1;
        messageElement.innerHTML = "It's O's Turn"
      }

      else if (currentPlayer === -1) {
        cell.innerHTML = player2[1];
        cell.style.fontFamily = "Londrina Shadow";
        cell.style.fontSize = "100px"
        checkWinner();
        currentPlayer = 1;
        messageElement.innerHTML = "It's X's Turn"
      }
      
    }
    checkWinner();
  })
})
  resetButtonElement.addEventListener("click", function () {
    resetGame();
  })

  /*----- functions -----*/

  //check current state for winning pattern
function checkWinner() {
  if (turnsLeft === 0) {
    messageElement.innerHTML = "It's a draw! Press RESET to play again!";
    setTimeout(resetGame, 5000);
  } else {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      const cellA = gameBoardElement[a].innerText;
      const cellB = gameBoardElement[b].innerText;
      const cellC = gameBoardElement[c].innerText;

      if (cellA && cellA === cellB && cellA === cellC) {
        const winningPlayer = cellA === player1[1] ? player1[1] : player2[1];
        messageElement.textContent = `${winningPlayer} Wins!`
        return;
      }
    }
  }
}

  
function resetGame() {
  gameBoardElement.forEach(function (cell) {
    if (cell.innerText === "X" || cell.innerText === "O") {
      cell.innerText = "";
      turnsLeft = 9;
      currentPlayer = 1;
      messageElement.innerHTML = "It's X's Turn";
    }
  })
}

