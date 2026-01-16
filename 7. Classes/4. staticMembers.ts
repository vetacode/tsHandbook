//Classes Static Members are not associated with a particular instance of the class.
//Can be accessed through the class constructor object itself:
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}

console.log(MyClass.x);
MyClass.printX();

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
  myGreeting = Derived.getGreeting();
}
