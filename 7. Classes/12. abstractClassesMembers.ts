abstract class Base {
  abstract getName(): string;

  printName() {
    console.log('Hello, ' + this.getName());
  }
}

const b = new Base();
// Cannot create an instance of an abstract class.

//We can’t instantiate Base with new because it’s abstract
//SOLUTION: make a derived class and implement the abstract members

class Derived extends Base {
  getName() {
    return 'world';
  }
}

const d = new Derived();
d.printName();

//If forgot implement base's classes abstract members
class Derived2 extends Base {
  // Non-abstract class 'Derived2' does not implement inherited abstract member getName from class 'Base'.
  // if forgot to do anything
}

{
  //Abstract Construct Signatures
  // @errors: 2511
  abstract class Base {
    abstract getName(): string;
    printName() {}
  }
  class Derived extends Base {
    getName() {
      return '';
    }
  }
  // ---cut---
  function greet(ctor: typeof Base) {
    const instance = new ctor();
    //                  ^ Cannot create an instance of an abstract class.
    instance.printName();
  }

  greet(Base); //it is legal -> will construct an abstract class, but its a bad practice

  //SOLUTION: write a function that accepts something with a construct signature
  function greet2(ctor: new () => Base) {
    const instance = new ctor();
    instance.printName();
  }
  greet2(Derived);
  greet2(Base);
  // Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  //   Cannot assign an abstract constructor type to a non-abstract constructor type.

  //Now TypeScript correctly tells you about which class constructor functions can be invoked - Derived can because it’s concrete, but Base cannot.
}
