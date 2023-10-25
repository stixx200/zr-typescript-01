import { readFile } from "node:fs/promises";

type PrimitiveJsonValue = string | number | boolean | null;

type JsonValue =
  | PrimitiveJsonValue
  | JsonValue[]
  | { [key: string]: JsonValue };

function printObject(obj: { [key: string]: JsonValue }, indentation = 0) {
  log(" [object]");
  for (const [key, value] of Object.entries(obj)) {
    log("\n");
    log(getIndentation(indentation + 2), key + ":");
    printValue(value, indentation + 2);
  }
}

function printArray(arr: JsonValue[], indentation: number) {
  log(" [array]");
  for (const [idx, value] of arr.entries()) {
    log("\n");
    log(getIndentation(indentation + 2), idx + ":");
    printValue(value, indentation + 2);
  }
}

function printValue(value: JsonValue, indentation = 0) {
  if (typeof value === "string") {
    printString(value, indentation);
  } else if (typeof value === "number") {
    printNumber(value, indentation);
  } else if (Array.isArray(value)) {
    printArray(value, indentation);
  } else if (typeof value === "object" && value !== null) {
    printObject(value, indentation);
  } else {
    log("[unknown]", value);
  }
}

// primitives

function printNumber(num: number, indentation: number) {
  log(" [number]", num);
}

function printString(str: string, indentation: number) {
  log(" [string]", str);
}

function getIndentation(indentation: number) {
  return " ".repeat(indentation);
}

function log(...args: JsonValue[]) {
  console.log(
    args
      .map((s) => {
        if (s === null) {
          return "null";
        }
        return s.toString();
      })
      .join(" ")
  );
}

const content = await readFile("./src/04_basic-types.json", "utf-8");
const jsonContent = JSON.parse(content);
printValue(jsonContent, 0);
