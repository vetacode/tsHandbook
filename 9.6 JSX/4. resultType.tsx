//JSX Result Type
//1. Perilaku default
//Secara bawaan, hasil dari sebuah ekspresi JSX (misalnya <div />) akan diberi tipe any oleh TypeScript. Hal ini merupakan keputusan desain awal agar JSX dapat digunakan secara fleksibel lintas framework (React, Preact, Solid, dsb.).

const el = <div />;
// el: any (secara default)

//2. Kustomisasi dengan JSX.Element
// TypeScript memungkinkan Anda mengganti tipe hasil JSX dengan mendefinisikan interface JSX.Element:

declare namespace JSX {
  interface Element {
    __brand: 'JSXElement';
  }
}

//Setelah ini, setiap ekspresi JSX akan bertipe JSX.Element.

//3. Keterbatasan utama (black box)
//Meskipun JSX.Element dapat ditentukan, interface ini tidak menyediakan informasi tipe tentang:
// nama elemen (div, span, dsb.),
// atribut (className, id, dsb.),
// children.

//Artinya, dari sudut pandang TypeScript, hasil JSX dianggap sebagai “kotak hitam” (black box). Type checking terjadi sebelum JSX dievaluasi menjadi JSX.Element, bukan sesudahnya.
