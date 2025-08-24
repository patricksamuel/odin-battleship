// gameboard.js

import Ship from "./ship";

export class Cell{
    constructor(row,column,shipPoint = null, hit = false){
        // cell creation OK
        this.row = row
        this.column = column
        this.shipPoint = shipPoint
        this.hit = hit
        
    }
}

export default class Gameboard{
    constructor(size = 10){
        //constructor tested
        this.board = []
        for (let i = 0 ; i<size; i++){
            let rowAdd =[];
            for (let j=0; j<size;j++){
                let columnAdd = new Cell(i,j)
                rowAdd.push(columnAdd)
            }
            this.board.push(rowAdd)
        }
        this.ship = []
        this.size = size
    }
    receiveAttack(row,column){
        // tested. be carfeul Do not use .board but rather gameBoardTest2.receiveAttack(0,1)
        if (this.board[row][column].shipPoint !== null){
            
            this.board[row][column].shipPoint.hit()
        }
        this.board[row][column].hit =true
    }
    addShip(newShip, coordinates){
        //check if the coordinates are empty
        for (const coordinate of coordinates){
            let row = coordinate[0]
            let column = coordinate[1]
            if (this.board[row][column].shipPoint != null){
                return
            }
        }
        //all ok now we put the ship
        for (const coordinate of coordinates){
            let row = coordinate[0]
            let column = coordinate[1]
            this.board[row][column].shipPoint = newShip
        }
        this.ship.push(newShip)
    }
    allSunk(){
        // function tested
        let result = false
        if (this.ship.length === 0){
            
            return true
        }
        for (const shipMember of this.ship){
            if (shipMember.isSunk() === false){
                return result
            }
            
        }
        return true
    }
}