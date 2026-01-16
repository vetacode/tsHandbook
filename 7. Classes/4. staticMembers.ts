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
