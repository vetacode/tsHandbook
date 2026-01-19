//ES Module Syntax
// A file can declare a main export via export default:

// @filename: hello.ts
export default function helloWorld() {
  console.log('Hello, world!');
}
//Error: A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled.
//Solved with: package.json -> type: module
//tsconfig.json -> module: esnext

//How to import
import helloWorld from './hello.js';
helloWorld();

//Exporting many modules
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}

//importing many modules
import { pi, phi, absolute } from './maths.js';

console.log(pi);
const absPhi = absolute(phi);
// const absPhi: number

//Additional Import Syntax
//An import can be renamed using a format like import {old as new}:
import { pi as π } from './maths.js';

console.log(π);
// (alias) var π: number
// import π

//Mix and Match import
// @filename: maths.ts
export const pi2 = 3.14;
export default class RandomNumberGenerator {}

// @filename: app.ts
import RandomNumberGenerator, { pi as π2 } from './maths.js';

RandomNumberGenerator;
// (alias) class RandomNumberGenerator
// import RandomNumberGenerator

console.log(π);
// (alias) const π: 3.14
// import π

//* as name -> take all of the exported objects and put them into a single namespace
// @filename: app.ts
import * as math from './maths.js';

console.log(math.pi);
const positivePhi = math.absolute(math.phi);
// const positivePhi: number

//import "./file" -> import a file and not include any variables into your current module
// @filename: app.ts
import './maths.js';

console.log('3.14');
