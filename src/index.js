import "./styles.css";
import render from "./render";
import Gameboard from "./gameboard";
import Ship from "./ship";
console.log("test") 

const playerBoardDom = document.querySelector("#playerBoard")
const playerGameBoard = new Gameboard(10)
let stillPlaying = true
const h3winnerdom = document.createElement("h3")
h3winnerdom.textContent = "WINNER"

let testShip = new Ship(3)
let testShipcoord =[[0,0],[0,1],[0,2]]
playerGameBoard.addShip(testShip,testShipcoord)
console.log(playerGameBoard.ship)



const enemyBoardDom = document.querySelector("#enemyBoard")
const enemyGameBoard = new Gameboard(10)


let testShipEnemy = new Ship(4)
let testShipEnemycoord =[[0,0],[0,1],[0,2],[0,3]]
enemyGameBoard.addShip(testShipEnemy,testShipEnemycoord)
console.log(enemyGameBoard.ship)

render(playerBoardDom,playerGameBoard,true,false);
render(enemyBoardDom,enemyGameBoard,false,false);


function handlePlayerClick(event) {
  if (playerGameBoard.allSunk() || enemyGameBoard.allSunk()) {

    console.log("game over");
    const playerDiv = document.querySelector("#playerDiv")
    playerDiv.appendChild(h3winnerdom)
    render(playerBoardDom, playerGameBoard, true, true);    // block player board
    render(enemyBoardDom, enemyGameBoard, false, true);  

    return;
  }

  console.log("Player attacked enemy!");
  render(playerBoardDom, playerGameBoard, true, true);    // block player board
  render(enemyBoardDom, enemyGameBoard, false, false);     // block enemy board
  enableEnemyTurn()
}

function handleEnemyClick(event) {
  if (playerGameBoard.allSunk() || enemyGameBoard.allSunk()) {
    console.log("game over");
    const EnemyDiv = document.querySelector("#enemyDiv")
    EnemyDiv.appendChild(h3winnerdom)
    render(playerBoardDom, playerGameBoard, true, true);    // block player board
    render(enemyBoardDom, enemyGameBoard, false, true);  

    return;
  }

  console.log("Enemy attacked player!");
  render(playerBoardDom, playerGameBoard, true, false);    // block player board
  render(enemyBoardDom, enemyGameBoard, false, true);     // block enemy board
  enablePlayerTurn()
}

function enablePlayerTurn() {
  render(playerBoardDom, playerGameBoard, true, false);    // block player board
  render(enemyBoardDom, enemyGameBoard, false, true); 
  playerBoardDom.addEventListener("click", handlePlayerClick);
  enemyBoardDom.removeEventListener("click", handleEnemyClick);
}

function enableEnemyTurn() {
  render(playerBoardDom, playerGameBoard, true, true);    
  render(enemyBoardDom, enemyGameBoard, false, false); 
  enemyBoardDom.addEventListener("click", handleEnemyClick);
  playerBoardDom.removeEventListener("click", handlePlayerClick);
}

enablePlayerTurn()