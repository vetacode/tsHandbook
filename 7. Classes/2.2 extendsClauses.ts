class Animal {
  move() {
    console.log('Moving along!');
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof');
    }
  }
}

const dog = new Dog();
//base class method
dog.move();
//Derived class method
dog.woof(5);

//OVERRIDING Methods
//SYNTAX: 'super' to override base class field
class Base {
  greet() {
    console.log('Hello Dunia');
  }
}

class Derived extends Base {
  // -> pake extends Base coz mau pake 'super'
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const derived = new Derived();
derived.greet(); // name === undefined
//(method) Derived.greet(name?: string | undefined): void
derived.greet('reader'); // name === 'reader'
//(method) Derived.greet(name?: string | undefined): void

//Alias dari derived instance melalui base class reference, diperbolehkan:
const b: Base = derived;
b.greet(); // -> b ──► [ Derived instance ]
//Objeknya Derived, referensinya Base

//Strightforward ambil dari Derived
const c: Derived = derived;
c.greet(); //aman
c.greet('Hellow'); //aman
