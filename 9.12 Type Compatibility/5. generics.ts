interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;
x = y; // OK, because y matches structure of x

interface NotEmpty<T> {
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;
x = y; // Error, because x and y are not compatible

let identity = function <T>(x: T): T {
  // ...
};
let reverse = function <U>(y: U): U {
  // ...
};
identity = reverse; // OK, because (x: any) => any matches (y: any) => any
