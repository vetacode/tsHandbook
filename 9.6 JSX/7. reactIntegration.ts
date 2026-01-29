//React integration (JSX + React typings)
//1. Intinya
//Agar JSX bisa “ngerti React”, TypeScript butuh React typings (@types/react). Typings ini mendefinisikan namespace JSX dengan aturan React:
// elemen HTML (div, span, dll)
// komponen React (function & class)
// validasi props
// children
// return type komponen

// Di contoh lama ini:
/// <reference path="react.d.ts" />

//itu artinya:
// “Ambil definisi tipe React dari file react.d.ts”

//Sekarang, ini sudah otomatis kalau kamu install:
// npm install react @types/react

//2. Contoh kode: kenapa yang satu OK, yang satu error
interface Props {
  foo: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}
//a. Disini Props didefinisikan:
foo: string;

//b. MyComponent:
//  - extends React.Component<Props, {}>
//  - artinya:
//      - props harus sesuai Props
//      - state kosong ({})

//c. JSX return:
<span>{this.props.foo}</span> // valid karena foo adalah string, dan string bisa dirender di JSX

//Pemanggilan komponen
<MyComponent foo="bar" />; // ok
// foo = "bar" → string → cocok dengan Props

<MyComponent foo={0} />; //error
// Error: foo = 0 → number
// Error: tapi Props.foo = string

//Error ini muncul karena React typings menghubungkan:
// JSX attribute (foo=...)
// ke tipe Props
// lewat parameter pertama React.Component<Props, State>

// JSX bukan magic, dia cuma “membungkus” type checking props.

//3. Peran namespace JSX dalam React
// React typings secara implisit mendefinisikan:
namespace JSX {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<...>;
    span: React.DetailedHTMLProps<...>;
    // dst
  }
}

// Makanya:
<span />// valid

<foo /> // error (kecuali foo adalah komponen)