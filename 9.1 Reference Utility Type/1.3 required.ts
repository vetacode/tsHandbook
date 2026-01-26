//Required Mengambil sebuah tipe Type, lalu:
// semua properti opsional (?)
// diubah menjadi required (wajib ada)

//Syntax: Required<Type>
interface Props {
  a?: number;
  b?: string;
}

//tanpa required:
const obj: Props = { a: 5 }; // Aman OK

//dengan required:
const obj2: Required<Props> = { a: 5 }; //Error: hrs include prop 'b' juga
//     ^ Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

//solusi:
const obj3: Required<Props> = {
  a: 5,
  b: 'hello',
}; // Aman

{
  //Required bekerja dibalik layar:
  type Required<T> = {
    [P in keyof T]-?: T[P];
  };
}
