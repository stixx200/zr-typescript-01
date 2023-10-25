// part1
function evenOrOdd(n: number): "Even" | "Odd" {
  return n % 2 === 0 ? "Even" : "Odd";
}

evenOrOdd(2); // even
evenOrOdd(3); // odd

// part2
interface ObjWithValue {
  value: number;
}

function evenOrOdd2(obj: ObjWithValue): "Even" | "Odd" {
  return obj.value % 2 === 0 ? "Even" : "Odd";
}

evenOrOdd2({ value: 2 }); // even
evenOrOdd2({ value: 3 }); // odd

// part3
function evenOrOdd3(obj: ObjWithValue | number): "Even" | "Odd" {
  if (typeof obj === "number") {
    return obj % 2 === 0 ? "Even" : "Odd";
  }
  return obj.value % 2 === 0 ? "Even" : "Odd";
}
