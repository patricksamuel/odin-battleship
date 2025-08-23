

export default function render(selectedContainer,gameBoard,showShip = true, clickBlocked = false){
    //selected conainter tested to take a element
    // ship receiving and attack tested ok
    //click block for turn and not whoing ship is ok
    let size = gameBoard.size
    const gridContainer = selectedContainer
    gridContainer.innerHTML = ""
    gridContainer.classList.add("grid")
    gridContainer.style.setProperty("--size",size)
    for (let row = 0; row<size;row++){
        for (let column = 0; column < size; column++){
            const cell = document.createElement("div")
            cell.classList.add("cell")
            if (gameBoard.board[row][column].shipPoint !=null && gameBoard.board[row][column].hit ===true){
                cell.classList.add("ship")
                cell.classList.add("hit")
            }
            if (gameBoard.board[row][column].shipPoint !=null && showShip === true){
                cell.classList.add("ship")
            }
            if (gameBoard.board[row][column].hit ===true){
                cell.classList.add("hit")
            }
            if (gameBoard.board[row][column].hit === false){
                if (clickBlocked === false){
                    cell.addEventListener("click",(e)=>{
                        console.log("click")
                        gameBoard.receiveAttack(row,column)
                        render(selectedContainer,gameBoard,showShip)
                    })
                }

            }
    
            gridContainer.appendChild(cell)
        }
    }
}