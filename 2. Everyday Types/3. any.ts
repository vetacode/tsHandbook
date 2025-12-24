let obj: any = { x: 0 };

// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

//The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
