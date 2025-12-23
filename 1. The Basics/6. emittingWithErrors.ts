// Greets the world.
console.log('Hello world!');

//use: tsc --noEmitOnError hello.ts to stop compile to JS files
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet('Brendan');

//tsc --noEmitOnError hello.ts => will not produce updated JS files
