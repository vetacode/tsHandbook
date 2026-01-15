//private is like protected, but doesn’t allow access to the member even from subclasses:
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
//            ^ Property 'x' is private and only accessible within class 'Base'.

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
    //               ^ Property 'x' is private and only accessible within class 'Base'.
  }
}

{
  //Ga bisa juga extends visibility
  class Base {
    private x = 0;
  }
  class Derived extends Base {
    // Class 'Derived' incorrectly extends base class 'Base'.
    //   Property 'x' is private in type 'Base' but not in type 'Derived'.
    x = 1;
  }
}
