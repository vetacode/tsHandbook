//Awaited<Type>
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean

//Ketika kita menulis: const result = await something;
//TS pakai Awaited<typeof something> untuk menentukan type result

//Contoh Promise biasa:
type A = Awaited<Promise<string>>;
//Promise<string> -> dibuka -> string

//Nested Promise
type B = Awaited<Promise<Promise<number>>>;
//Promise pertama dibuka -> isinya masih Promise
//buka lagi -> hasilnya: number

//Union (mix)
type C = Awaited<boolean | Promise<number>>;

//Diproses satu per satu:
//boolean (bukan Promise) -> boolean
//Promise<number> -> dibuka -> number
//hasil: boolean | number

//NOTES:
//Promise → dibuka
//Promise di dalam Promise → dibuka terus
//Bukan Promise → tetap
//Union → diproses per anggota

//Aplikasi:
async function getData() {
  return Promise.resolve(123);
}

type Result = Awaited<ReturnType<typeof getData>>;
// Result = number

//Jangan hard code seperti ini:
type Result2 = number;
