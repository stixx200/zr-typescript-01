// ############################################
// conditional types

interface Document {
  id: string;
}
interface File {
  id: number;
}
type DocumentOrFile<T> = T extends string ? Document : File;
function getInstanceForId<T extends string | number>(id: T): DocumentOrFile<T> {
  return { id } as any;
}
let doc = getInstanceForId("Manfred"); // type Document
let file = getInstanceForId(2); // type File
let fileOrDoc = getInstanceForId(Math.random() > 0.5 ? "manual" : 2); // type Document | File

// ############################################
// conditional type constraints

// type IdOf<T> = T["id"]; // Type '"id"' cannot be used to index type 'T'
type IdOf<T extends { id: unknown }> = T["id"]; // ok
type DocId = IdOf<Document>; // type string
type FileId = IdOf<File>; // type number

// ############################################
// infer

type FlattenWithoutInfer<T> = T extends unknown[] ? T[number] : T;
type Flatten<T> = T extends Array<infer Item> ? Item : never;
type F = Flatten<string>;
type Flatted1 = Flatten<string[]>; // string
type Flatted2 = Flatten<string>; // string

// get return type of a function
type AnyFunction = (...args: unknown[]) => unknown;
type GetReturnType<Type extends AnyFunction> = Type extends (
  ...args: never[]
) => infer ReturnType
  ? ReturnType
  : never; // we can never reach this branch

// ############################################
// distributive conditional types
// if T is a union type, then
// (T extends U ? X : Y)
// becomes
// ((T extends U ? X : Y) | (T extends U ? X : Y) | ...)

// to avoid this distribution, wrap the conditional type in a tuple:
// ([T] extends [U] ? X : Y)

type ToArray<Type> = Type extends unknown ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; // type string[] | number[]
// ToArray distributes on string | number, so we get
// ToArray<string> | ToArray<number>    ==>     string[] | number[]

type ToArray2<Type> = [Type] extends [unknown] ? Type[] : never;
type StrOrNumArr = ToArray2<string | number>; // type (string | number)[]
