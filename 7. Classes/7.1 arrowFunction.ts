{
  //Dengan method function biasa
  class MyClass {
    name = 'MyClass';
    getName() {
      return this.name;
    }
    //tidak mengikat this
    //this ditentukan oleh cara function dipanggil
  }
  const c = new MyClass();
  const g = c.getName;

  console.log(g()); // -> g dipanggil tanpa object -> this !== c -> this === undefined/window
}

//Dengan arrow function
class MyClass {
  name = 'MyClass';
  getName = () => {
    return this.name;
  };
  //Yang terjadi:
  // getName bukan method di prototype
  // getName adalah property di setiap instance
  // Arrow function mengikat this secara permanen ke this saat dibuat (this === c)
}
const c = new MyClass(); // -> this.getName = () => {return this.name} -> this === c
//saat new MyClass dipanggil, Arrow function menyimpan this = c (instance)
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g()); //MyClass
