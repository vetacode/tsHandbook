class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
    // 'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}
