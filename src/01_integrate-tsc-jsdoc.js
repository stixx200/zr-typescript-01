// @ts-check

/**
 * @param {string} path
 * @returns
 */
function readFile(path) {
  return path;
}

readFile("test.txt");
// readFile(123);
// > Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// more information about checking javascript code in typescript:
// https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
