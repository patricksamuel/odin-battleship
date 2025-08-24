import {Cell} from "./gameboard";
import Ship from "./ship";
import Gameboard from "./gameboard"




test('test gameboard making', () => {
    let gameBoardTest = new Gameboard(1)
    console.log(gameBoardTest)
    expect(gameBoardTest.board[0][0]).toEqual({ row : 0, column : 0, shipPoint : null, hit : false});
});

test('test 2 sized gameboard', () => {
    let gameBoardTest2 = new Gameboard(2)
    console.log(gameBoardTest2)
    expect(gameBoardTest2.board).toEqual([
        [{ row : 0, column : 0, shipPoint : null, hit : false},{ row : 0, column : 1, shipPoint : null, hit : false}],
        [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
    ]
    );
});

test('test 2 sized gameboard and adding a ship', () => {
    let gameBoardTest2 = new Gameboard(2)
    let testShip = new Ship(1)
    gameBoardTest2.board[0][0].shipPoint = testShip
    expect(gameBoardTest2.board).toEqual([
        [{ row : 0, column : 0, shipPoint : testShip, hit : false},{ row : 0, column : 1, shipPoint : null, hit : false}],
        [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
    ]
    );
});


test('test hitting a ship', () => {
    let gameBoardTest2 = new Gameboard(2)
    let testShip = new Ship(1)
    let testShip2 = new Ship(1)
    gameBoardTest2.board[0][0].shipPoint = testShip
    gameBoardTest2.board[0][1].shipPoint = testShip2
    gameBoardTest2.receiveAttack(0,1)
    expect(gameBoardTest2.board).toEqual([
        [{ row : 0, column : 0, shipPoint : testShip, hit : false},{ row : 0, column : 1, shipPoint : testShip2, hit : true}],
        [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
    ]
    );
});

test('test placing a ship', () => {
    let gameBoardTest2 = new Gameboard(2)
    let testShip = new Ship(1)
    let testShip2 = new Ship(1)
    let testShipcoord =[[0,0],[0,1]]
    gameBoardTest2.addShip(testShip,testShipcoord)
    expect(gameBoardTest2.board).toEqual([
        [{ row : 0, column : 0, shipPoint : testShip, hit : false},{ row : 0, column : 1, shipPoint : testShip, hit : false}],
        [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
    ]
    );
});

test('test allSunk', () => {
    let gameBoardTest2 = new Gameboard(2)
    let testShip = new Ship(1)
    let testShip2 = new Ship(1)
    let testShipcoord =[[0,0],[0,1]]
    gameBoardTest2.addShip(testShip,testShipcoord)
    gameBoardTest2.receiveAttack(0,1)
    gameBoardTest2.receiveAttack(0,0)
    expect(gameBoardTest2.board).toEqual([
        [{ row : 0, column : 0, shipPoint : testShip, hit : true},{ row : 0, column : 1, shipPoint : testShip, hit : true}],
        [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
    ]
    );
    expect(gameBoardTest2.allSunk()).toBe(true);
});


test('test allSunk', () => {
    let gameBoardTest2 = new Gameboard(2)
    let testShip = new Ship(1)
    let testShip2 = new Ship(1)
    let testShipcoord =[[0,0],[0,1]]
    gameBoardTest2.addShip(testShip,testShipcoord)
    console.log(gameBoardTest2.ship)
    expect(gameBoardTest2.board).toEqual([
        [{ row : 0, column : 0, shipPoint : testShip, hit : false},{ row : 0, column : 1, shipPoint : testShip, hit : false}],
        [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
    ]
    );
    expect(gameBoardTest2.allSunk()).toBe(false);
});





