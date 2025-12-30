//Overload Signatures and the Implementation Signature

//NOTES:
// The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.

// 1️⃣ overload signatures (public, terlihat dari luar)
function fn(x: string): string;
function fn(x: number): number;

// 2️⃣ implementation signature (private, tidak terlihat dari luar)
function fn(x: string | number) {
  return typeof x === 'string' ? x.toUpperCase() : x * 2;
}
console.log(fn('Hello World of Andromeda Galaxy')); //HELLO WORLD OF ANDROMEDA GALAXY

//DIFFERENCE
//GA PAKE OVERLOAD
function double1(x: string | number): string | number {
  return typeof x === 'string' ? x + x : x * 2;
}
//it runs, tapi type return masih bias (string | number), padahal sdh pasti hanya string
console.log(double1('hello')); //'hellohello'
//            ^function double(x: string | number): string | number

//SOLUSI: pake function overload
function double(x: string): string;
function double(x: number): number;
function double(x: string | number) {
  return typeof x === 'string' ? x + x + x : x * 2;
}

console.log(double('Hai ')); //Hai Hai Hai
//            ^function double(x: string): string (+1 overload)

console.log(double(4)); //8
//            ^function double(x: number): number (+1 overload)

//Rule penting:
// Harus ada ≥ 2 overload signatures
// Implementation harus kompatibel dengan semua overload
// Pemanggil hanya boleh memanggil sesuai overload, bukan implementasi

// Kapan HARUS pakai overload jika?
// Input menentukan return type
// API punya beberapa mode pemanggilan
// Ingin DX (developer experience) bagus

// Jangan pakai overload jika:
// Bisa diselesaikan dengan generic
// Logic terlalu kompleks (overload terlalu banyak)

//Rule of thumb:
// Kalau function kita dipakai orang lain (atau future you) → pertimbangkan pake overload

//contoh Fetch API client
function request(url: string): Promise<string>;
function request<T>(url: string, json: true): Promise<T>;
function request(url: string, json?: boolean) {
  return fetch(url).then((r) => (json ? r.json() : r.text()));
}
