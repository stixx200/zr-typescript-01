enum Direction {
  Up = 1,
  Down = "DOWN",
  Left = 2,
  Right = 2 + 1,
}

console.log(Direction);
console.log(Direction[1]);
Direction.Up = 2;

const Direction2 = {
  Up: 1,
  Down: "DOWN",
  Left: 2,
  Right: 2 + 1,
} as const;

console.log(Direction2);
Direction2.Up = 2;
