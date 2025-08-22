import Ship from "./ship";

let testshipObject= new Ship(10)
let testShortshipObject= new Ship(1)

test('ship class creation', () => {
  expect(testshipObject).toEqual({length : 10, hitCount : 0, sunk : false, });
});


test('ship beinghit', () => {
  expect(testshipObject.hit()).toEqual({length : 10, hitCount : 1, sunk : false, });
});

test('short ship creatiion', () => {
  expect(testShortshipObject).toEqual({length : 1, hitCount : 0, sunk : false, });
});



test('ship being hit to die', () => {
  expect(testShortshipObject.hit()).toEqual({length : 1, hitCount : 1, sunk : true });
});

test('test is sunk function on shortship', () => {
  expect(testShortshipObject.isSunk()).toBe(true);
});
