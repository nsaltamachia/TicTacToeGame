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
    //handleCellClick(cell);
    if (cell.innerText === "") {
      console.log(cell);
      //change the cell's innerHTML to player's symbol (X or O), but do I have these declared?
      // do I assign a player to the cell?
      if (currentPlayer === 1) {
        cell.innerHTML = player1[1];
        cell.style.fontFamily = "Londrina Shadow";
        //cell.style.fontSize = ""
        currentPlayer = -1;
      }
      else if (currentPlayer === -1) {
        cell.innerHTML = player2[1];
        cell.style.fontFamily = "Londrina Shadow";
        //cell.style.fontSize = ""
        currentPlayer = 1;
      }
      
    }
    
    
  }) 
  })

/*----- functions -----*/
function intialize() {

}

function handleCellClick(cell) {
  //if (gameBoardElement[cell] !== "") return
  
  
  //checkWinner();
  
}
/*
function checkWinner() {
 
  if (winner === false) 
  { 
    
  } else {
   
  }
}
*/
function resetGame() {
//clear input fields
//reset variables
}


  
   


  if (currentPlayer === 1) {
  }
