//readonly is a modifier
//a property marked as readonly can’t be written to during type-checking.
//it won’t change any behavior at runtime

interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = 'hello';
  //    ^ Cannot assign to 'prop' because it is a read-only property.
}

doSomething({ prop: 'Do anything' }); // prop has the value 'Do anything'.

//readonly doesnt mean deeply immutable.
interface Home {
  readonly resident: { name: string; age: number };
  // artinya:
  // Properti resident tidak boleh diganti referensinya,
  // TAPI object yang dirujuk oleh resident masih mutable.
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.name = 'Eska'; //boleh mutasi isi obj
  home.resident.age++; //boleh mutasi isi obj
}

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
    // Cannot assign to 'resident' because it is a read-only property.
    // Ga boleh ganti obj baru
    name: 'Victor the Evictor',
    age: 42,
  };
}

visitForBirthday({ resident: { name: 'Eska', age: 40 } }); //Happy birthday Eska!

//Syntax destructuring:
function visitForBirthday2({ resident }: Home) {
  console.log(resident.name);
}

//OR nested
function visitForBirthday3({ resident: { name, age } }: Home) {
  console.log(name, age);
}

//Jika ingin totally deep immutable: pakai deep readonly
interface House {
  readonly resident: Readonly<{ name: string; age: number }>;
}

function visitParty(house: House) {
  house.resident.name = 'John'; // sdh ga bs diakses/immutable
  //               ^ Cannot assign to 'name' because it is a read-only property.
}

//Beda readonly vs as const
//readonly melindungi struktur, bukan nilai
//cocok digunakan untuk API/contract
interface Home {
  readonly resident: {
    name: string;
    age: number;
  };
}

function visit(home: Home) {
  home.resident.age++; //Aman
  home.resident = {} as any; // Error: Cannot assign to 'resident' because it is a read-only property.
}

//readonly untuk public API
function updateAge(home: Home) {
  /*...*/
}

//as const: deepReadonly + freeze nilai literal
//menjadi deep readonly, semuanya readonly (deep immutable)
//menjadi literal type (as is, not number or string)
//cocok digunakan untuk constants/config
const home = {
  resident: {
    name: 'Eska',
    age: 40,
  },
} as const;

console.log(home.resident.name); //Eska
console.log(home.resident.age); //40

home.resident.age++; //error: Cannot assign to 'age' because it is a read-only property.

//as const untuk CONFIG
const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
} as const;

//NOTES:
//Readonly<T>     // "jangan ganti property ini"
// DeepReadonly<T> // "jangan ubah APAPUN"
// as const        // "nilai ini mutlak & readonly"
