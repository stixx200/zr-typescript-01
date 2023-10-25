import { arrayBuffer } from "stream/consumers";

// plain object types
type Object1 = { a: number; b: number };

type Object2 = { optionalAttr?: number; requiredAttr: number };
let obj2: Object2 = { requiredAttr: 1, optionalAttr: 2 };

type Object3 = { readonly roAttr: number; rwAttr: number };
let obj3: Object3 = { roAttr: 1, rwAttr: 2 };
// obj3.roAttr = 34; // Cannot assign to 'roAttr' because it is a read-only property.ts(2540)

// ##################################
// index access

type Array1 = number[];
let arr1: Array1 = [];
console.log(arr1.length);
type Array2 = { [key: number]: number };
let arr2: Array2 = [];
// console.log(arr2.length); // Property 'length' does not exist on type 'Array2'.ts(2339)

type StringDict = { [key: string]: string };
let dict1: StringDict = {};
dict1["key1"] = "value1";

type StringOrNumberDict = {
  [key: string]: string | number | undefined;
  length?: number;
  // notAllowed: string[]; // Type 'string[]' is not assignable to type 'string | number | undefined'.ts(2322)
};
let dict2: StringOrNumberDict = {};
dict2["key1"] = "value1";
dict2["key2"] = 2;

// ##################################
// (strict) object type checks

function f(obj: { a: number; b: number }) {
  console.log(obj.a);
  console.log(obj.b);
}
f({ a: 1, b: 2 }); // ok
// f({ a: 1, b: 1, c: 1 }); // Object literal may only specify known properties, and 'c' does not exist in type '{ a: number; b: number; }'.ts(2345)
const obj = { a: 1, b: 2, c: 3 };
f(obj);
// f({ a: 1 }); // Object literal may only specify known properties, and 'b' does not exist in type '{ a: number; }'.ts(2345)

// ##################################
// interfaces

interface Person {
  name: string;
  age: number;
}
interface PersonWithAddress extends Person {
  address: string;
}

interface Job {
  company: string;
}

interface WorkingPerson extends PersonWithAddress, Job {
  salary: number;
}

type WorkingPerson2 = PersonWithAddress & Job & { salary: number };
