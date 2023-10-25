import { createRequire } from "module";
import * as ModuleTs from "./12_module.js";
import mod2, { parse as parseInput, id } from "./12_module.js";
import mod from "./12_module.js";

import cjsMod from "./12_module_cjs.cjs";

type X = (typeof ModuleTs)["parse"];

console.log(ModuleTs.parse("1"));
console.log(ModuleTs.default("1"));
console.log(mod("234"));
console.log(id);
console.log(parseInput("123"));

console.log(cjsMod);
