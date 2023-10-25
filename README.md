## To start a typescript project:

- `npm init -y`
- `npm install --save-dev typescript`
- `npx tsc --init`
- tsconfig.json:
  - `moduleResolution: "Node16"`
  - `module: "Node16"`
  - `outDir: "dist"`
  - `allowJs: true`
- package.json
  - `type: "module"`
- `git init`
- create .gitignore file

## compile typescript code

- `npx tsc`

## Integrate tsc

### To existing JavaScript code

- https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html

## TypeScript hello world

- `npm install --save-dev ts-node`
- `node --loader ts-node/esm src/02_hello-world.ts`
- Alterantives:
  - `npx ts-node --esm src/02_hello-world.ts`
  - `npx ts-node-esm src/02_hello-world.ts`
