import {Cell} from "./gameboard";
import Ship from "./ship";
import Gameboard from "./gameboard"
import Player from "./player";


test('test player board making', () => {
    let newPlayer = new Player(2)
    expect(newPlayer.playerBoard.board).toEqual([
            [{ row : 0, column : 0, shipPoint : null, hit : false},{ row : 0, column : 1, shipPoint : null, hit : false}],
            [{ row : 1, column : 0, shipPoint : null, hit : false},{ row : 1, column : 1, shipPoint : null, hit : false}]
        ]
        );
});

test('test player making default type value', () => {
    let newPlayer = new Player(2)
    expect(newPlayer.computerPlayer).toBe(false);
});

test('test player making default lost or won', () => {
    let newPlayer = new Player(2)
    expect(newPlayer.lost).toBe(false);
});