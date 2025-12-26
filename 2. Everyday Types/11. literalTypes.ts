let changingString = 'Hello World';
changingString = 'Olá Mundo';
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system

changingString; // let changingString: string

const constantString = 'Hello World';
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation

constantString; // const constantString: "Hello World"

//One variable
let x: 'hello' = 'hello'; // OK
x = 'hello'; // ...
x = 'howdy'; // Type '"howdy"' is not assignable to type '"hello"'.

//Combining literal Union
function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // ...
}
printText('Hello, world', 'left');
printText("G'day, mate", 'centre'); // Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

//Numeric literal
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('5', '2')); //1
console.log(compare('5', '7')); //-1
console.log(compare('7', '7')); //0

//Combining with non literal
interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  // ...
}
configure({ width: 100 });
configure('auto');
configure('automatic'); //Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

//boolean literal type
let isActive: true | false; // redundant
let isActive2: boolean; //Best practice 90% of the time
declare const isActive3: true | false; //artinya tipe variable isActive sdh ada di runtime
declare const isActive4: boolean; //Gunakan jika file berasal dari external spt bundler atau luar file TS itu sendiri

// NOTES: Gunakan true | false hanya jika: true dan false punya arti berbeda secara tipe
function setFlag(flag: true): 'enabled';
function setFlag(flag: false): 'disabled';
function setFlag(flag: true | false) {
  return flag ? 'enabled' : 'disabled';
}

//LITERAL INFERENCE
declare const someCondition: boolean;
// ---cut---
const obj = { counter: 0 };

//TS meng-infer
// const obj: {
//   counter: number
// }

//Same as
const obj2: { counter: number } = { counter: 0 };
//ini membuat value obj props jadi flexible (mutable), bisa dirubah selama type number
if (someCondition) {
  obj.counter = 1;
}
console.log(obj);

//untuk membuat immutable gunakan as const:
const num = { counter: 0 } as const;
//as const membuat num menjadi read-only:
// const num: {
//   readonly counter: 0
// }

if (true) {
  num.counter = 1; //Cannot assign to 'counter' because it is a read-only property.
}
