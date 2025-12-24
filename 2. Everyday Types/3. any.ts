// let obj: any = { x: 0 };

// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = 'hello';
// const n: number = obj;

//The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

//* noImplicitAny
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

function isAlright(status) {
  //Parameter 'status' implicitly has an 'any' type.
  //with flag noImplicitAny: true (or strict: true), status will shows error, coz it infer 'any' from context
  return status;
}

console.log(isAlright('Always'));
