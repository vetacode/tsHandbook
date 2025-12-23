//1. Obj Properties
const user = {
  name: 'Daniel',
  age: 26,
};
user.location; // in JS it returns undefined, in TS it throws error the property location doesnt exist

//2. typos
const announcement = 'Hello World!';

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();

//3. Uncalled functions
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
  // Operator '<' cannot be applied to types '() => number' and 'number'.
}

//4. Basic logic errors
const value = Math.random() < 0.5 ? 'a' : 'b';
if (value !== 'a') {
  // ...
} else if (value === 'b') {
  // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
