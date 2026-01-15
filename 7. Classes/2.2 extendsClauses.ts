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
