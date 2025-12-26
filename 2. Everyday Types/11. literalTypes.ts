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
