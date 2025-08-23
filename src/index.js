import "./styles.css";
import render from "./render";
import Gameboard from "./gameboard";
import Ship from "./ship";
console.log("test") 

const playerBoardDom = document.querySelector("#playerBoard")
const playerGameBoard = new Gameboard(10)

let testShip = new Ship(1)
let testShipcoord =[[0,0],[0,1],[0,2]]
playerGameBoard.addShip(testShip,testShipcoord)


render(playerBoardDom,playerGameBoard);

const enemyBoardDom = document.querySelector("#enemyBoard")
const enemyGameBoard = new Gameboard(10)

let testShipEnemy = new Ship(1)
let testShipEnemycoord =[[0,0],[0,1],[0,2]]
playerGameBoard.addShip(testShipEnemy,testShipEnemycoord)


render(enemyBoardDom,enemyGameBoard,true,true);
