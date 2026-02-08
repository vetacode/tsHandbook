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
  //yang dibandingkan adalah:
  // fungsi (() => number dengan angka (0.5) => Makanya TypeScript protes
}

//Yang betul
function flipCoin2() {
  return Math.random() < 0.5;
  //Sekarang alurnya: Math.random() → menghasilkan angka (misalnya 0.32)
  // 0.32 < 0.5 → true
  // Return true atau false
}

//4. Basic logic errors
const value = Math.random() < 0.5 ? 'a' : 'b';
//TypeScript menyimpulkan tipe value sebagai: union literal 'a' | 'b', bukan string

if (value !== 'a') {
  //disini TS baca hasil value === 'b'
  // ...
} else if (value === 'b') {
  //else if (dari 'b') berarti => 'a'
  //disini TS membaca 'a' === 'b' => mustahil, sehingga error:
  // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
