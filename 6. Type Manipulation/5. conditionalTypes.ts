interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string

//useful combination with generics
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'unimplemented';
}

//Solution: Use conditional type
type K = number | string;
type NameOrId<T extends K> = T extends number ? IdLabel : NameLabel;

//then use that conditional type to simplify overloads
function createLabel2<T extends K>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel2('typescript');
//  ^ let a: NameLabel

let b = createLabel(5);
//  ^ let b: IdLabel

let c = createLabel(Math.random() ? 'hello' : 42);
//  ^ let c: NameLabel | IdLabel
// Math.random() -> 0 <= n < 1
// 0 → false
// Semua angka selain 0 → true
