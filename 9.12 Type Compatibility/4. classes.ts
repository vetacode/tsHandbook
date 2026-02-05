class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number;
  constructor(numFeet: number) {}
}
let a: Animal;
let s: Size;
a = s; // OK
s = a; // OK
