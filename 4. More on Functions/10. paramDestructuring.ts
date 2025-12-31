//JavaScript code:
function sum({ a, b, c }) {
  //TS screaming of any type (ERror: Binding element 'a' implicitly has an 'any' type.)
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

//Adds type
function sum2({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

//simpler code
type ABC = {
  a: number;
  b: number;
  c: number;
};

function sum3({ a, b, c }: ABC) {
  console.log(a + b + c);
}
