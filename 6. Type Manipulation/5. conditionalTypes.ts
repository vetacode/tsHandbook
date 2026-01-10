interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string

//useful combination with generics
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'unimplemented';
}

//Solution: Use conditional type
type K = number | string;
type NameOrId<T extends K> = T extends number ? IdLabel : NameLabel;

//then use that conditional type to simplify overloads
function createLabel2<T extends K>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel2('typescript');
//  ^ let a: NameLabel

let b = createLabel(5);
//  ^ let b: IdLabel

let c = createLabel(Math.random() ? 'hello' : 42);
//  ^ let c: NameLabel | IdLabel
// Math.random() -> 0 <= n < 1
// 0 → false
// Semua angka selain 0 → true

{
  //1. CONDITIONAL TYPE CONSTRAINTS

  //problem:
  type MessageOf<T> = T['message'];
  //                         ^ Type '"message"' cannot be used to index type 'T'.
  //SOLUTION: use type constraints to T -> JIKA kita sudah yakin inputnya pasti punya prop 'message'
  type MessageOf2<T extends { message: unknown }> = T['message'];
  //T HARUS berupa object yang punya property message

  interface Email {
    message: string;
  }

  type EmailMessageContents = MessageOf2<Email>;
  //            ^ type EmailMessageContents = string

  //Kalo kita ingin menerima semua type, jika punya prop message, ambil, jika ga punya return never:
  type MessageOf3<T> = T extends { message: unknown } ? T['message'] : never;
  //Jika T memiliki property message, maka hasilnya adalah tipe dari T["message"], jika tidak, hasilnya never.
  //Conditional type melakukan “type narrowing”

  interface Email {
    message: string;
  }

  interface Dog {
    bark(): void;
  }

  type EmailMessageContents2 = MessageOf3<Email>;
  // type EmailMessageContents = string

  type DogMessageContents = MessageOf3<Dog>;
  // type DogMessageContents = never

  //FLATTEN
  //Tujuan: klo kita mau buat type utility dgn aturan:
  // - Kalo T adlh array, ambil type element di dalam array
  // - Kalo T bukan array, let it be
  //contoh yg diinginkan:
  // Flatten<string[]>  // → string
  // Flatten<number>   // → number

  type Flatten<T> = T extends any[] ? T[number] : T;
  // T extends any[] -> bisa masuk semua array (string[], number[], User[], dsb)
  // ? T[number] : T; -> juka T adlh array, return T[number], jk bukan array, return T
  // T[number] -> adlh indexed access Type, artinya ambil type dari elemen di dlm array T. Contoh simple:
  type A = string[];
  type ElementType = A[number];
  //        ^ type ElementType = string

  //Contoh Flatten<string[]>
  type Str = Flatten<string[]>;
  //   ^ type Str = string
  // Logical step:
  //  > string[] extends any[] → Yes
  //  > Masuk ke true branch
  //  > Hitung string[][number]
  //  > Hasil → string

  //Contoh Flatten<number>
  type Num = Flatten<number>;
  //    ^ type Num = number
}

{
  //2. INFERRING WITHIN CONDITIONAL TYPES

  //we could have inferred the element type in Flatten instead of fetching it out “manually” with an indexed access type:
  type Flatten<T> = T extends Array<infer Item> ? Item : T; // -> jk T adlh Array dari sesuatu, maka beri nama sesuatu itu 'Item', dan hasilnya 'Item'
  //Infer adalah cara mengambil type di dalam (dlm contoh ini adalah type di dlm Array)
  //aplikasi:
  type Num = Flatten<number[]>;
  //    ^ type Num = number
  type Str = Flatten<string>;
  //    ^ type Str = string

  type GetReturnType<T> = T extends (...args: never[]) => infer Return
    ? Return
    : never;
  //T extends (...args: never[]) => infer Return -> artinya jika T adlh function dgn param apapun dan dgn return type tertentu, ambil return type itu dan beri nama 'Return'
  //never[] disini artinya kita ga peduli argumennya apa, yg penting function
  //aplikasi:
  type Numbre = GetReturnType<() => number>;
  //     ^ type Numbre = number
  type Setring = GetReturnType<(x: string) => string>;
  //     ^ type Setring = string
  type Bool = GetReturnType<(a: boolean, b: boolean) => boolean>;
  //     ^ type Bool = boolean
  type Z = GetReturnType<string>; //argument bukan function
  //   ^ type Z = never
}

//di function overloads -> satu function dgn banyak signature
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;
//   ^ type T1 = string | number
//Infer selalu diambil dari signature TERAKHIR
