//CommonJS adalah sistem modul JavaScript (sebelum ES Modules -> import/export) yang:
// Digunakan secara luas di Node.js
// Menjadi format utama package di npm (terutama package lama & backend)
// Menggunakan require() dan module.exports

//Exporting
//Identifiers are exported via setting the exports property on a global called module.
function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}

module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
};

//Import seluruh module (namespace object)
//Then these files can be imported via a require statement:
const maths = require('./maths');
maths.pi;
// any

//Import sebagian (destructuring)
//Or you can simplify a bit using the destructuring feature in JavaScript:
const { squareTwo } = require('./maths');
squareTwo;
// const squareTwo: any
