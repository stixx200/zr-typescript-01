// typeof guard

function getZipCode(zipCode: number | string): number {
  if (typeof zipCode === "string") {
    // zipCode == string
    return parseInt(zipCode);
  }
  return zipCode;
}

// these strings are used for typeof
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"

// ############################################
// truthiness guard

function getZipCode2(zipCode?: number | string): number {
  if (zipCode) {
    return getZipCode(zipCode);
  }
  return 0;
}
function ohneName(arg: string | 1 | 0) {
  if (arg) {
    arg;
  }
}

// falsy values are:
// 0
// NaN
// "" (the empty string)
// 0n (the bigint version of zero)
// null
// undefined

// ############################################
// equality guard

function getNumberOrString(): number | string {
  return 1;
}
function getStringOrBoolean(): string | boolean {
  return false;
}
let v1 = getNumberOrString();
let v2 = getStringOrBoolean();
if (v1 === v2) {
  // v1 == v2 == string
}

// ############################################
// in guard

interface Person {
  name: string;
  age: number;
}
interface Animal {
  name: string;
  legs: number;
}
function printName(obj: Person | Animal) {
  if ("age" in obj) {
    console.log(obj.age); // obj is type Person
  } else {
    console.log(obj.legs); // obj is type Animal
  }
}

// ############################################
// instance of

class Person {
  name: string = "Manfred";
  age: number = 1;
}
class Animal {
  name: string = "Hans";
  legs: number = 2;
}
function greet(ding: Person | Animal) {
  if (ding instanceof Person) {
    console.log("Hello", ding.age);
  } else {
    console.log("Hello", ding.legs);
  }
}

// ############################################
// assigments

let x: number | string;
x = 1;
x.toFixed();
x = "1";
x.toUpperCase();

// ############################################
// type predicates

function isPerson(obj: any): obj is Person {
  return obj["name"] !== undefined && obj.age !== undefined;
}
let anyObject: { name: string };
anyObject = { name: "Manfred", age: 24 } as typeof anyObject;

// anyObject.age;

if (isPerson(anyObject)) {
  console.log(anyObject.age);
}

// ############################################
// assertions

declare function assertIsNumber(value: unknown): asserts value is number;

let y: number | string = getNumberOrString();
assertIsNumber(y);
y.toFixed();
