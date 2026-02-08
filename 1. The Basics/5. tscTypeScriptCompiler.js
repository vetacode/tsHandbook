//install npm install -g typescript
// Greets the world.
console.log('Hello world!');
function greet(person, date) {
  console.log('Hello '.concat(person, ', today is ').concat(date, '!'));
}

console.log(
  greet('Brendan', new Date().toLocaleDateString('id-ID', { weekday: 'long' })),
); //its not shows error, rather resulting undefined when code runs

const message = 'Hai';

function sayHi() {
  console.log(message);
}

// message();
sayHi();
