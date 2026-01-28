//Intrinsic elements (huruf kecil seperti <div />, <foo />) dicek TypeScript lewat JSX.IntrinsicElements
//Interface ini berisi daftar tag yang boleh dipakai

//Contoh:
interface JSX.IntrinsicElements {
  foo: any;
}

// <foo /> boleh (ada di daftar)
// <bar /> error (tidak didefinisikan)

// Kalau JSX.IntrinsicElements tidak ada, semua tag huruf kecil dianggap valid (tidak dicek).
// Kalau kamu pakai index signature:

interface JSX.IntrinsicElements {
  [key: string]: any;
}
// Semua intrinsic element dibolehkan, tapi tanpa type checking yang ketat.

//Intinya:
// JSX.IntrinsicElements = whitelist tag JSX huruf kecil + tipe props-nya

