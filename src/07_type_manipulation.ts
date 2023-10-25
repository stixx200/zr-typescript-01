// ############################################
// index access

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type PersonArray = typeof MyArray;
type Person = PersonArray[number];
// type Person = {
//     name: string;
//     age: number;
// }

// ############################################
// function generics

type getFirstType = <T>(arr: T[]) => T;
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
function getFirst2<T>(arr: Array<T>): T {
  return arr[0];
}
const firstPerson = getFirst(MyArray);

const o = {
  f1() {},
  f2: function () {},
  f3: () => {},
};

type getFirstAsObjectType = {
  f1<T>(arr: T[]): T;
  f2: <T>(arr: T[]) => T;
  f3: <T>(arr: T[]) => T;
  length: number;
  position: number;
};
type getFirstAsGenericObjectType<T> = {
  (arr: T[]): T;
  length: number;
  position: T;
};

interface getFirstAsInterface {
  <T>(arr: T[]): T;
  length: number;
  position: number;
}
interface getFirstAsGenericInterface<T> {
  (arr: T[]): T;
  length: number;
  position: T;
}

// ############################################
// generic class

class Plane<T> {
  constructor(public readonly config: T) {}
}

function buildAFlugzeug<T>(config: T) {
  return new Plane(config);
}
const flugzeug = buildAFlugzeug({ wings: 2 });
flugzeug.config.wings;
