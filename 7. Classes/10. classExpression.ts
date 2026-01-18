//Class expressions are very similar to class declarations. The only real difference is that class expressions don’t need a name, though we can refer to them via whatever identifier they ended up bound to:

//Class declaration biasa:
let x: Box<string>;
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }
}

const b = new Box('Isi');
b.content;
//Ciri2:
// Punya nama class sendiri (Box)
// Nama class bs dipakai sbg 'value' dan juga 'type'
// Hoisted (sebagian) -> bisa direferensikan di bawah deklarasi variable
// | Aspek | Class           |
// | ----- | --------------- |
// | Type  | ✅ Hoisted       |
// | Value | ❌ Tidak hoisted |

//Class Expression
const someClass = class<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
};

//class<T> { ... } adalah expression
// Disimpan ke variabel SomeClass
// Nama class diambil dari variabel, bukan dari deklarasi

const m = new someClass('Hello, world');
// const m: someClass<string>;

{
  //Contoh yg tdk bs pakai class declaration
  function createClass<T>() {
    return class {
      //ini adalah expression
      value!: T;
    };
  }

  const MyClass = createClass<number>();
  const x = new MyClass();
}
