//Generics - Types which take parameters

interface User {
  name: string;
  age: number;
}

function findUser(id: string): User | undefined {
  if (id === '123') {
    return { name: 'Boby', age: 30 };
  }
  return; //undefined
}

const user = findUser('123');
if (user) {
  console.log(`${user.name} age is ${user.age}`); //Boby age is 30
} else {
  console.log('User Not Found');
}

//1. Hello world of Generics
//Identity function generic
function identity<T>(arg: T): T {
  return arg;
}
let outputNum = identity<number>(20);
console.log(outputNum); //20

let outputStr = identity<string>('myString');
//    ^  let outputStr: string

//Type argument inference
let outputStr2 = identity('myString');
//    ^ let output: string

//2. Working with Generic Type Variables
function arrLen<T>(...args: T[]): T[] {
  if (args.every((arg) => typeof arg === 'number')) {
    console.log(`Semua number, dengan length: ${args.length}`);
  }
  return args;
}
arrLen<number>(100, 10, 25);
// let arr1 = arrLen<number>(100);
// console.log(arr1);
