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

{
  //Jika Derived (Subclass) didn’t follow Base’s contract:
  class Base {
    greet() {
      console.log('Hello, world!');
    }
  }

  class Derived extends Base {
    // Make this parameter required
    greet(name: string | undefined) {
      // -> pakai union | undefined jg tdk bisa coz beda dgn optional params '?'
      // Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
      //   Type '(name: string) => void' is not assignable to type '() => void'.
      //     Target signature provides too few arguments. Expected 1 or more, but got 0. -> Base boleh dipanggil tanpa argumen, Derived tidak bisa menerima pemanggilan itu -> Derived tidak kompatibel sebagai Base
      if (name === undefined) {
        super.greet;
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
  //Artinya:
  // Base menjanjikan fungsi yang bisa dipanggil TANPA argumen, tapi Derived malah minta 1 argumen WAJIB.
  const d = new Derived();
  const b: Base = d;
  b.greet();
}

{
  class Base {
    greet() {
      console.log('Hello, world!');
    }
  }

  class Derived extends Base {
    greet(name: string | undefined) {
      // -> pakai union | undefined jg tdk bisa coz beda dgn optional params '?'
      if (name === undefined) {
        super.greet;
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }

  const d = new Derived();
  const b: Base = d;
  b.greet();
}
