//JavaScript’s handling of this is indeed unusual:
class MyClass {
  name = 'Kelas';
  getName() {
    return this.name;
  }
}
const c = new MyClass();
// c adalah instance dari MyClass
// c.name → "MyClass"
// c.getName() → method yang membaca this.name

const obj = {
  name: 'Ojek',
  getName: c.getName,
};

// Prints "Ojek", not "Kelas"
console.log(obj.getName()); //Ojek
//Karena di JS:
// this tidak “menempel” ke fungsi
// this ditentukan oleh SIAPA YANG MEMANGGIL fungsi itu
// -> this === obj -> return this.name -> obj.name -> Ojek

c.name; // -> Kelas
c.getName(); // -> this === c -> return this.name -> c.name -> Kelas

//NOTE: this ditentukan saat runtime oleh cara pemanggilan, bukan oleh class

//SOLUSI:
// Arrow function
// this parameter di TS
// bind this
