//In classes, a special type called this refers dynamically to the type of the current class
class Box {
  contents: string = '';
  set(value: string) {
    //^ (method) Box.set(value: string): this
    this.contents = value;
    return this;
  }
}

class ClearableBox extends Box {
  clear() {
    this.contents = '';
  }
}

const a = new ClearableBox();
const b = a.set('Hello');
//    ^ const b: ClearableBox

class Box2 {
  contents: string = '';
  sameAs(other: this) {
    return other.contents === this.contents;
  }
}

class DerivedBox extends Box2 {
  otherContent: string = '?';
}

const base = new Box2();
const derived = new DerivedBox();
derived.sameAs(base);
// Argument of type 'Box2' is not assignable to parameter of type 'DerivedBox'.
//   Property 'otherContent' is missing in type 'Box2' but required in type 'DerivedBox'.
