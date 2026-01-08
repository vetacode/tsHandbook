//Generics - Types which take parameters

interface User {
  name: string;
  age: number;
}

function findUser(id: string): User | undefined {
  if (id === '123') {
    return { name: 'Boby', age: 30 };
  }
  return; //undefined
}

const user = findUser('123');
if (user) {
  console.log(`${user.name} age is ${user.age}`); //Boby age is 30
} else {
  console.log('User Not Found');
}

{
  //1. HELLO WORLD OF GENERICS
  //Identity function generic
  function identity<T>(arg: T): T {
    return arg;
  }
  let outputNum = identity<number>(20);
  console.log(outputNum); //20

  let outputStr = identity<string>('myString');
  //    ^  let outputStr: string

  //Type argument inference
  let outputStr2 = identity('myString');
  //    ^ let output: string
}

{
  //2. WORKING WITH GENERIC TYPE VARIABLES
  function arrLen<T>(...args: T[]): T[] {
    if (args.every((arg) => typeof arg === 'number')) {
      console.log(`Semua number, dengan length: ${args.length}`);
    } else {
      console.log(args);
    }
    return args;
  }
  arrLen<number>(100, 10, 25);
  arrLen<string>('apa', 'aba', 'ata');
  // let arr1 = arrLen<number>(100);
  // console.log(arr1);

  //versi lebih aman karena tdk return apapun (side effect function only)
  function arrLen2<T>(...args: T[]): void {
    if (args.every((arg) => typeof arg === 'number')) {
      console.log(`Semua number, dengan length: ${args.length}`);
    } else {
      console.log(args);
    }
  }
}

{
  //3. GENERIC TYPES
  // The type of generic functions is just like those of non-generic functions, with the type parameters listed first, similarly to function declarations:

  function identity<T>(arg: T): T {
    return arg;
  }
  let myIdentity: <T>(arg: T) => T = identity;
  //myIdentity adalah sebuah function generic,
  // yang punya type parameter: T,
  // menerima arg: T,
  // dan mengembalikan T.
  //<T>(arg: T) => T -> ini adalah tipe fungsi, hanya ada di compile time, ga ada di runtime js
  console.log(identity === myIdentity); //true

  //Type generic function bisa juga dituliskan sebagai call signature di dalam object type:
  function identity2<T>(arg: T): T {
    return arg;
  }
  let myIdentity2: { <T>(arg: T): T } = identity2;
  //{ <T>(arg: T): T } -> ini adalah object type
  //artinya: myIdentity bertipe sebuah object yang bisa dipanggil (callable object) -> call signature: deskripsi “bagaimana sebuah value bisa dipanggil seperti function”
  //contoh sederhana call signature non generic:
  interface Fn {
    (x: number): number;
  }
  //artinya: Fn adlh object type yg bisa dipanggil, terima number & return number
  let f: Fn = (x) => x * 5;
  console.log(f(10)); //50

  //contoh generic call signature:
  interface GenCall {
    <T>(arg: T): T;
  }
  //Object type ini punya call signature
  //artinya: obj type ini bisa dipanggil sbg function, untuk semua tipe: T, terima arg: T dan return: T.
  //makna nya sama sperti function type: (<Type>(arg: Type) => Type)

  //penggunaan bisa tambah property

  interface GenFn {
    <T>(arg: T): T;
  }
  function identity3<T>(arg: T): T {
    return arg;
  }

  identity3.description = 'it can add new props to the obj';

  let myIdentity3: GenFn = identity3; //Aman, Karena TypeScript tidak melarang value punya property lebih banyak dari yang diminta tipe.

  //Tapi kalo value < Type required -> Error
  interface GenFn2 {
    <T>(arg: T): T;
    description: string;
  }

  function identity4<T>(arg: T): T {
    return arg;
  }

  let myIdentity4: GenFn2 = identity4;
  //      ^ Property 'description' is missing in type '<T>(arg: T) => T' but required in type 'GenFn2'.

  //We can also move the generic parameter to be a parameter of the whole interface.
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }

  function identity5<T>(arg: T): T {
    return arg;
  }

  let myIdentity5: GenericIdentityFn<number> = identity5;
}

{
  //4. GENERIC CLASSES
  class GenericClass<T> {
    zeroVal: T;
    add: (x: T, y: T) => T;
    // ^Error compile time: Property 'add' has no initializer and is not definitely assigned in the constructor.

    //solusi hilangin error: harus initialize assigned pke constructor
    constructor(zeroVal: T, add: (x: T, y: T) => T) {
      this.zeroVal = zeroVal;
      this.add = add;
    }
  }

  let genClass = new GenericClass<number>(0, (x, y) => x + y);
  console.log(genClass); //GenericClass { zeroVal: 0, add: [Function (anonymous)] }

  genClass.zeroVal = 0;
  genClass.add = function (x, y) {
    return x + y;
  };

  console.log(genClass); //GenericClass { zeroVal: 0, add: [Function (anonymous)] }

  let genClassStr = new GenericClass<string>('tas ', (x, y) => x + y);
  console.log(genClassStr.add(genClassStr.zeroVal, 'test')); //tas test
}

{
  //5. GENERIC CONSTRAINTS
  //Problem:
  function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length);
    //                ^ Property 'length' does not exist on type 'Type'.
    return arg;
  }
  //Solution: extends constraints
  interface Len {
    length: number;
  }
  function loggingIdentity2<T extends Len>(arg: T): T {
    console.log(arg.length); //aman, coz type sdh di constraints dgn interface Len
    return arg;
  }

  //<T extends Len> artinya T boleh type apa aja asal MINIMAL punya properti .length.
  //so, T hanya dibatasi (constrained) supaya pasti punya .length

  //penggunaanya:
  loggingIdentity2(10); //Error: Argument of type 'number' is not assignable to parameter of type 'Len'. -> number ga punya property length
  //yang bener:
  loggingIdentity2({ length: 10, value: 3 }); //10 -> ini adalah custom object
  //kenapa ada tambahan props value boleh:
  // {
  //   length: number; // memenuhi constraint
  //   value: number; // extra property boleh
  // }

  loggingIdentity2('hello'); //5 -> Aman, string 'hello' punya length 5
  loggingIdentity2([1, 2, 3]); //3 -> Aman, array ini punya length 3
}

{
  //6. USING TYPE PARAMETERS IN GENERIC CONSTRAINTS
  //It is placing a constraint between the two types, to ensure that we’re not accidentally grabbing a property that does not exist on the obj
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; //value dari computed key of object
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };
  //K extends keyof T -> constraints (kontrak keras antara obj dan key), artinya: K harus merupakan salah satu key dari T
  //keyof T = "a" | "b" | "c" | "d" -> K boleh berupa "a", "b", "c", atau "d", ga boleh string lain
  //TypeScript memaksa key pasti valid untuk obj

  console.log(getProperty(x, 'a')); //1
  getProperty(x, 'm');
  //              ^ Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
}

{
  //7. USING CLASS TYPES IN GENERICS
  //klo mau buat pabrik object dg constructor:
  function create<T>(c: T): T {
    return new c();
    //         ^ This expression is not constructable.
    //            Type 'unknown' has no construct signatures.
  }

  //SOLUSI: pakai constructor signature
  function create2<T>(c: { new (): T }): T {
    return new c();
  }

  //{ new (): T } -> ini disebut constructor signature type
  //artinya: tipe function yg bisa dipanggil dgn new, tanpa argumen, dan menghasilkan instance type: T
  //jadi c bukan object biasa, tp class/constructor function
  //factory harus menerima 'constructor' (c: { new (): T }) tapi return 'instance' (new c())

  class Car {
    wheels = 6;
  }
  const car = create2(Car); //-> constructor. car: Car
  // const car = new Car(); //-> instance. car: Car
  console.log(car.wheels); //6

  //advanced example using prototype props to infer and constraints
  class BeeKeeper {
    hasMask: boolean = true;
  }

  class ZooKeeper {
    nametag: string = 'Mikle';
  }

  class Animal {
    numLegs: number = 4;
  }

  class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }

  console.log(createInstance(Lion).keeper.nametag); //Mikle
  console.log(createInstance(Bee).keeper.hasMask); //true
  //This pattern is used to power the mixins design pattern.
}

//8. GENERIC PARAMETER DEFAULTS
type Container<T, U> = {
  element: T;
  children: U;
};

// ---cut---
declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;

//With generic parameter defaults we can reduce it to:
declare function create<
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement[] = T[]
>(element?: T, children?: U): Container<T, U>;

//usage:
const div = create();
//     ^ const div: Container<HTMLDivElement, HTMLDivElement[]>

const p = create(new HTMLParagraphElement());
//    ^ const p: Container<HTMLParagraphElement, HTMLParagraphElement[]>

//A generic parameter default follows the following rules:
//1.Generic yg punya default -> jadi opsional
type Box<T = string> = { value: T }; //T boleh tidak diisi → otomatis pakai string.
//2.Generic (wajib) ga boleh setelah generic opsional
type Example<T = string, U> = {}; // error: Required type parameters may not follow optional type parameters.
type Example2<T, U = string> = {}; // yang wajib dulu, yang opsional belakangan
//3.Default type harus sesuai constraint
type Len<T extends { length: number } = number> = T; //Error: Type 'number' does not satisfy the constraint '{ length: number; }'.
type Len2<T extends { length: number } = string> = T; // OK: Default harus lolos extends
//4.Saat pakai generic, cukup isi yang wajib
type Pair<T, U = number> = [T, U];
type A = Pair<string>; // [string, number]
type B = Pair<string, boolean>; // [string, boolean]
//5.Jika inference gagal → pakai default
function foo<T = string>(): T {
  return '' as T;
}
const x = foo(); // T = string -> Default = fallback type
//6.Interface / class hasil merge boleh nambah default
interface Box2<T> {
  value: T;
}
interface Box2<T = string> {
  //Merge boleh nambah default ke generic lama
  label?: string;
}
//7.Interface / class hasil merge boleh nambah generic baru (asal ada default)
interface Api<T> {
  data: T;
}
interface Api<T, E = Error> {
  //Generic baru WAJIB punya default
  error?: E;
}

{
  //9.VARIANCE ANNOTATION
  //disclaimers: This is an advanced feature for solving a very specific problem, and should only be used in situations where you’ve identified a reason to use it

  //Covariance and contravariance are type theory terms that describe what the relationship between two generic types is. Here’s a brief primer on the concept.
  //basic relation
  class Animal {}
  class Cat extends Animal {}

  //Covariance
  interface Producer<T> {
    make(): T;
  }
  // Producer cuma “menghasilkan” T
  // Producer<Cat> → bikin Cat
  // Producer<Animal> → bikin Animal
  // Producer<Cat> bisa dipakai di tempat Producer<Animal>
  // Cat → Animal
  // Producer<Cat> → Producer<Animal>

  //Contravariance
  interface Consumer<T> {
    consume: (arg: T) => void;
  }
  // Consumer cuma “menerima / memakan” T
  // Consumer<Cat> → cuma bisa nerima Cat
  // Consumer<Animal> → bisa nerima Animal apa pun (termasuk Cat)
  // Consumer<Animal> bisa dipakai di tempat Consumer<Cat>
  // Cat → Animal
  // Consumer<Animal> → Consumer<Cat>

  // NOTES:
  // Function parameters default-nya contravariant
  // Return type covariant
}
