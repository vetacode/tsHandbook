//Control flow analysis memungkinkan TypeScript menentukan tipe variabel berdasarkan apa yang pasti terjadi di setiap jalur eksekusi kode.

function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);
  //          ^let x: Boolean

  if (Math.random() < 0.5) {
    x = 'hello';
    console.log(x);
    //          ^let x: string
  } else {
    x = 100;
    console.log(x);
    //          ^let x: number
  }

  return x;
  //     ^let x: string | number
}
