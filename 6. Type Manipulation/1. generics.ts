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

  let genClass = new GenericClass<number>();
  console.log(genClass); //GenericClass { zeroVal: undefined, add: undefined }

  genClass.zeroVal = 0;
  genClass.add = function (x, y) {
    return x + y;
  };

  console.log(genClass); //GenericClass { zeroVal: 0, add: [Function (anonymous)] }
}
