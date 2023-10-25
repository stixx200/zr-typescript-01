# Integration tsc

## Migrate a JavaScript project to TypeScript

There are three ways to integrate the typescript compilter into an existing JavaScript project:

### JavaScript Code with `// @ts-check`

The easiest way to integrate TypeScript into an existing JavaScript project is to add the `// @ts-check` comment to the top of each JavaScript file.

- Set `"allowJs": true` in tsconfig.json
- Set `"checkJs": false` in tsconfig.json
- Add `// @ts-check` to the top of each JavaScript file which should be checked by the TypeScript compiler
- Alternatively set `checkJs` to `true` and add `// @ts-nocheck` to the top of each JavaScript file which should not be checked by the TypeScript compiler

```javascript
// @ts-check

import fs from "node:fs";

fs.readFile("<path-to-file>", (err, data) => {
  err?.splice(); // < Property 'splice' does not exist on type 'ErrnoException'.ts(2339)
});
```

### JavaScript Code with JsDoc annotations

A more type safe way to integrate TypeScript into an existing JavaScript project is to add JsDoc annotations to the JavaScript code.
The typescript compiler will use the JsDoc annotations to check the JavaScript code.

```javascript
// @ts-check

import fs from "node:fs";

/**
 * @param {string} path The path to the file
 */
function readFile(path) {
  return "";
}
readFile(123); // < Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
readFile("<path-to-file>");
```

### TypeScript Code

The most type safe approach is to convert the JavaScript code to TypeScript code.

```typescript
interface Account {
  id: number;
  displayName: string;
  version: 1;
}

function welcome(user: Account) {
  console.log(user.id);
  console.log(user.name); // < Property 'name' does not exist on type 'Account'.ts(2339)
}
```
