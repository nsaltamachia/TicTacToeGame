/*----- constants -----*/
const player1 = [1, "X"]
const player2 = [-1, "O"]
let currentPlayer = 1;
let winner = null;
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cells = document.querySelectorAll(".cell")

/*----- state variables -----*/
const gameBoard = ["", "", "", "", "", "", "", "", ""];

/*----- cached elements  -----*/
const gameBoardElement = document.querySelectorAll(".cell");
const messageElement = document.querySelector(".message");
const resetButton = document.querySelector(".resetButton");

/*----- event listeners -----*/
// iterate (forEach) over the gameBoard element
//forEach cell, add event listener ("click" function(e))

  gameBoardElement.forEach(function(cell) {
  cell.addEventListener("click", function(){
    
    if (cell.innerText === "") {
      console.log(cell);
      //change the cell's innerHTML to player's symbol (X or O), but do I have these declared?
      // do I assign a player to the cell?
      if (currentPlayer === 1) {
        cell.innerHTML = player1[1];
        cell.style.fontFamily = "Londrina Shadow";
        //cell.style.fontSize = ""
        checkWinner(),
        currentPlayer = -1;
        //change .message to say whose turn it is
      }
      else if (currentPlayer === -1) {
        cell.innerHTML = player2[1];
        cell.style.fontFamily = "Londrina Shadow";
        //cell.style.fontSize = ""
        checkWinner()
        currentPlayer = 1;
        //change .message to say whose turn it is
      }
    }
  }) 
  //after a click is made, update the gameBoard (change cell state to the corresponding player)
  //updateGameBoard
  
})

/*----- functions -----*/

//check current state for winning pattern
function checkWinner() {
const checkWinningPattern = (pattern) => {
const [a, b, c] = pattern;
return gameBoard[a] && gameBoard[b] === gameBoard[b] && gameBoard[a] === gameBoard[c];
};

const winningPattern = winningPatterns.find(checkWinningPattern);

if (winningPattern) {
  winner = currentPlayer === 1 ? player1[1] : player2[1];
  messageElement.textContent = "`${winner} Wins!"
} else if (gameBoard.every(cell => cell !== "")) {
  messageElement.textContent = "It's a draw! Play again?";
}

  
}


/*
function resetGame() {
//clear input fields
//reset variables
}
*/