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
