import Gameboard from "./gameboard"

export default class Player{
    constructor(size,computerPlayer = false, lost = false){
        this.playerBoard = new Gameboard(size)
        this.lost = lost
        this.computerPlayer = computerPlayer
    }
}