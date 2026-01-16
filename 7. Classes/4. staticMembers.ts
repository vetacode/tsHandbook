//Classes Static Members are not associated with a particular instance of the class -> tdk bisa diakses lewat instance
//Can be accessed through the class constructor object itself:
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x); //Aman -> akses langsung via class nya
MyClass.printX(); //Aman -> akses langsung via class nya
const obj = new MyClass();

obj.x; // Error, coz akses indirect lewat instance nya. Klo member biasa (ga pake static), bisa/aman akses via instance
//  ^ Property 'x' does not exist on type 'MyClass'. Did you mean to access the static member 'MyClass.x' instead?
obj.printX(); // Error, coz akses indirect lewat instance nya
//    ^ Property 'printX' does not exist on type 'MyClass'. Did you mean to access the static member 'MyClass.printX' instead?

//Can also use public, protected and private visibility modifiers:
class Yours {
  private static x = 0;
}
console.log(Yours.x);
//                ^ Property 'x' is private and only accessible within class 'Yours'.

//Static members are also inherited:
class Base {
  static getGreeting() {
    return 'Hello World';
  }
}

class Derived extends Base {
  myGreeting = Derived.getGreeting(); //aman coz akses tetap lewat Base class
  // klo akses lewat instance nya akan error:
  // new Derived().getGreeting(); // ERROR
}

//NOTES:
//Pakai static jika:
// Tidak butuh data instance
// Fungsi utilitas
// Counter global
// Factory method
class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
}
MathUtil.add(2, 3); // 5

//Ga perlu pakai static jika:
// Bergantung pada data object (this)
// Setiap instance harus punya state sendiri
class User {
  name: string;
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  constructor(name: string) {
    this.name = name;
  }
}
