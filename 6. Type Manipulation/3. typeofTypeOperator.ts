//TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:
let s = 'hello';
let n: typeof s;
//  ^ let n: string;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
//   ^ type K = boolean

//If we try to use ReturnType on a function name, we see an instructive error:
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
//                  ^ 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

//Remember that values and types aren’t the same thing. To refer to the type that the value f has, we use typeof:
function f2() {
  return { x: 10, y: 3 };
}
type P2 = ReturnType<typeof f2>;
// type P2 = {
//     x: number;
//     y: number;
// }

// Limitations
// TypeScript intentionally limits the sorts of expressions you can use typeof on.

// Specifically, it’s only legal to use typeof on identifiers (i.e. variable names) or their properties. This helps avoid the confusing trap of writing code you think is executing, but isn’t:
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
// ',' expected.


//NOTES:
// Aturan utama typeof (type operator), Hanya boleh dipakai pada:
// Identifier (nama variabel / fungsi / class): typeof foo
// Property dari identifier tersebut: typeof foo.bar

//Tidak boleh dipakai pada expression:
// pemanggilan fungsi: typeof foo()     // Error
// operasi: typeof (a + b)  // Error
// literal hasil evaluasi: typeof "hello"  // Error

