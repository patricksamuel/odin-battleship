export default class Ship{
    constructor(length,hitCount=0,sunk=false){
        // constructor tested OK
        this.length = length
        this.hitCount= hitCount
        this.sunk=sunk
    }
    hit(){
        // hit function tested OK
        this.hitCount = this.hitCount + 1
        this.sunk = this.isSunk()
        return this

    }
    isSunk(){
        if ((this.length - this.hitCount)<= 0){
            this.sunk = true
            return this.sunk
        }
        return this.sunk
    }
}