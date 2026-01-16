class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }
}

const b = new Box('Hola');
//    ^ const b: Box<string> -> inferred type string

//Type Params in Static Members: ga boleh pakai Type
class Box2<T> {
  static defaultValue: T;
  //                   ^ Static members cannot reference class type parameters.
}

//Kenapa static member ga boleh pakai Type generic?
// coz its milik class, bukan milik instance
// hanya ada satu (yaitu di class), ga peduli brp pun instance nya
// At runtime, there’s only one Box.defaultValue property slot: Box.defaultValue
// At runtime, ga ada:
//  Box<string>.defaultValue
//  Box<number>.defaultValue

//SOLUSI: static method dgn generic sendiri
class Box3<Type> {
  static create<T>(value: T) {
    return new Box<T>(value);
  }
}
//Generic-nya milik method, bukan class static

// NOTES:
// Static members hidup di runtime, generic hanya hidup di type system — karena itu static tidak boleh bergantung pada generic class.

{
  //Penggunaan:
  class Box<T> {
    contents: T;

    constructor(value: T) {
      this.contents = value;
    }

    static create<S>(value: S) {
      return new Box<S>(value);
    }
  }
  //generic T milik class
  //generic S milik method create
  //static ga pakai generic type

  const b1 = new Box(10); //const b1: Box<number>
  const b2 = Box.create('Hei'); //const b2: Box<string>
  const b3 = Box.create({ name: 'Alice', age: 35 });
  //const b3: Box<{
  //     name: string;
  //     age: number;
  // }>
  const b4 = Box.create<boolean>(true); //const b4: Box<boolean>
}
