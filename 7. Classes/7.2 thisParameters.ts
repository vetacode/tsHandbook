//Dengan arrow function
class MyClass {
  name = 'MyClass';
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;

console.log(g()); //Aman -> result: MyClass

//Kelebihan:
// this otomatis bind ke instance
// Aman walau di-assign ke variable

//Kekurangan:
// Satu function baru per instance
// Tidak bisa super.getName()

//SOLUSI dari kekurangan pake arrow fn: Pake this parameter
class Kelasku {
  nama = 'Kelas';
  getName(this: Kelasku) {
    return this.nama;
  }
}

const k = new Kelasku();
const n = k.getName();
const m = k.getName;

console.log(n); //Aman
console.log(n()); //Error: This expression is not callable. // Type 'String' has no call signatures. k.getName(): return 'string'
// -> artinya: string bukan function, ga bisa dipanggil dengan () -> error out of context this
console.log(m()); //Error TS compile time -> wrong this context
//          ^ The 'this' context of type 'void' is not assignable to method's 'this' of type 'Kelasku'.
//

//Pakai this: Params jika:
// Method tidak boleh dilepas dari object
// Ingin tetap prototype-based
// Butuh inheritance (super)

//Pakai arrow function jika:
// Method sering dipass sebagai callback
// Prioritas keamanan runtime
// Tidak butuh inheritance method
