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
