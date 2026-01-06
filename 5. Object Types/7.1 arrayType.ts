//number[] or string[], are just a shorthand for Array<number> and Array<string>.
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ['hello', 'world'];

// either of these work!
doSomething(myArray);
doSomething(new Array('hello', 'world'));
