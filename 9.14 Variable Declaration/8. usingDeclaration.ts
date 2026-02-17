//Fitur using ini tujuannya mengatur “umur hidup” sebuah resource secara otomatis, supaya tidak lupa dibersihkan.
//cara untuk otomatis menjalankan cleanup saat keluar dari sebuah block {}.

//1. Masalah yang Ingin Diselesaikan
//Di JavaScript, kadang kita bekerja dengan resource seperti:
// File handle
// Database connection
// Network socket
// Timer
// Logging/tracing object

//Masalahnya, Kalau lupa “membersihkan” (close / dispose), bisa terjadi:
// Memory leak
// File tidak tertutup
// Resource menggantung

//Biasanya kita pakai try...finally supaya aman.

// Contoh tanpa using:
function f() {
  const x = new C();
  try {
    doSomethingWith(x);
  } finally {
    x[Symbol.dispose]();
  }
}
// Agak ribet dan repetitif

//Solusinya pakai: using

//Dengan using, JavaScript otomatis memanggil fungsi cleanup saat keluar dari block.
// Contoh:

function f() {
  using x = new C();
  doSomethingWith(x);
}
// otomatis: x[Symbol.dispose]() dipanggil di akhir block
// // Artinya:
// Saat keluar dari block {} — baik karena selesai normal atau karena error —
// JavaScript akan memanggil:
x[Symbol.dispose]();

// Jadi mirip try...finally, tapi otomatis.

//Contoh Nyata: File
{
  using file = await openFile();
  file.write(text);
  doSomethingThatMayThrow();
}

//Walaupun doSomethingThatMayThrow() error, file tetap akan:
// file[Symbol.dispose]();
//Jadi file tetap tertutup. Aman

//Contoh Tracing
class TraceActivity {
  constructor(name) {
    this.name = name;
    console.log(`Entering: ${name}`);
  }

  [Symbol.dispose]() {
    console.log(`Exiting: ${this.name}`);
  }
}

function f() {
  using activity = new TraceActivity('f');
  console.log('Hello world!');
}

f();

//Syarat: harus pnya method ini:
class Test {
  [Symbol.dispose]() {
    console.log('dibersihkan');
  }
}

//KESIMPULAN
//using = const + otomatis cleanup saat keluar dari scope.
