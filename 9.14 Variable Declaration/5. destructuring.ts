// Array destructuring
// The simplest form of destructuring is array destructuring assignment:
{
  let input = [1, 2];
  let [first, second] = input;
  console.log(first); // outputs 1
  console.log(second); // outputs 2
  // This creates two new variables named first and second.
  // This is equivalent to using indexing, but is much more convenient:
  first = input[0];
  second = input[1];
}

{
  // Destructuring works with already-declared variables as well:
  // swap variables
  [first, second] = [second, first];
}

// And with parameters to a function:
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);

// You can create a variable for the remaining items in a list using the syntax ...:
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

// Of course, since this is JavaScript, you can just ignore trailing elements you don’t care about:
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1

// Or other elements:
let [, second, , fourth] = [1, 2, 3, 4];
console.log(second); // outputs 2
console.log(fourth); // outputs 4

//TUPLE DESTRUCTURING
{
  let tuple: [number, string, boolean] = [7, 'hello', true];
  let [a, b, c] = tuple; // a: number, b: string, c: boolean
}

{
  //It’s an error to destructure a tuple beyond the range of its elements:
  let tuple: [number, string, boolean] = [7, 'hello', true];
  let [a, b, c, d] = tuple; // Error, no element at index 3
}

// //As with arrays, you can destructure the rest of the tuple with ..., to get a shorter tuple:
{
  let tuple: [number, string, boolean] = [7, 'hello', true];
  let [a, ...bc] = tuple; // bc: [string, boolean]
}

{
  let tuple: [number, string, boolean] = [7, 'hello', true];
  let [a, b, c, ...d] = tuple; // d: [], the empty tuple
}

{
  //Or ignore trailing elements, or other elements:
  let tuple: [number, string, boolean] = [7, 'hello', true];
  let [a] = tuple; // a: number
  let [, b] = tuple; // b: string
}

//OBJECT DESTRUCTURING
let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
};
let { a, b } = o;
//This creates new variables a and b from o.a and o.b. Notice that you can skip c if you don’t need it.

//Like array destructuring, you can have assignment without declaration:
({ a, b } = { a: 'baz', b: 101 }); //Notice that we had to surround this statement with parentheses. JavaScript normally parses a { as the start of block.

{
  //You can create a variable for the remaining items in an object using the syntax ...:
  let o = {
    a: 'foo',
    b: 12,
    c: 'bar',
  };
  let { a, ...passthrough } = o;
  let total = passthrough.b + passthrough.c.length;
}

{
  //PROPERTY RENAMING
  let o = {
    a: 'foo',
    b: 12,
    c: 'bar',
  };
  let { a: newName1, b: newName2 } = o;
  //Artinya:
  // Ambil property a dari object o, lalu simpan ke variabel baru bernama newName1
  // Ambil property b dari object o, lalu simpan ke variabel baru bernama newName2
}

{
  //Secara manual (tanpa destructuring), ini sama dengan:
  let o = {
    a: 'foo',
    b: 12,
    c: 'bar',
  };
  let newName1 = o.a;
  let newName2 = o.b;
}

//Di sini:
// let { a: newName1, b: newName2 };
// Titik dua BUKAN berarti tipe data.
// artinya: Ambil property a, simpan ke variabel newName1

//Di dalam destructuring object, formatnya adalah:
// propertyLama: namaVariabelBaru

//Kalo mau kasih Type:
{
  //Confusingly, the colon here does not indicate the type. The type, if you specify it, still needs to be written after the entire destructuring:
  let { a: newName1, b: newName2 }: { a: string; b: number } = o;

  //Strukturnya jadi:
  //{ destructuring } : { type definition } = object
}
