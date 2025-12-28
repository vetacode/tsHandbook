let x = Math.random() < 0.5 ? 10 : 'hello world!';

// let x: string | number
x = 1;

console.log(x);

// let x: number
x = 'goodbye!';

console.log(x);

// let x: string

x = true;
// Type 'boolean' is not assignable to type 'string | number'.
