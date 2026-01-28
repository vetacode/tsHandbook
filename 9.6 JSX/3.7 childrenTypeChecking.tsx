//Konsep dasar Di JSX: children itu special.
// Saat kita menulis:

<MyComp>
  <h1>Hello</h1>
  World
</MyComp>;

//TypeScript menganggap semua isi di antara tag itu sebagai:
props.children;

//1. Bagaimana TS tahu nama children?
// TypeScript pakai interface ini:

interface JSX.ElementChildrenAttribute {
  children: {};
}

//Artinya:
// “Semua isi JSX di dalam tag → masuk ke props.children”
// Kalau tidak ada ini, TS tidak tahu ke properti mana children dimasukkan.

//2. Apa saja yang dianggap children?
<div>
  <h1>Hello</h1>
</div>
// children = <h1>Hello</h1>

<div>
  <h1>Hello</h1>
  World
</div>
// children = [<h1>Hello</h1>, "World"]
// JSX element + string = children


//3. Children di custom component
const CustomComp = (props) => (
  <div>{props.children}</div>
);

<CustomComp>
  <div>Hello World</div>
  {"This is just a JS expression..." + 1000}
</CustomComp>

//props.children berisi:
// JSX element
// string hasil ekspresi JS

//Ini valid kalau tipe children mengizinkan itu.

//4. Type checking children (inti masalah)
// Kamu bisa tentukan tipe children sendiri.
// Contoh:
interface PropsType {
  children: JSX.Element;
  name: string;
}
// Artinya: children HARUS satu JSX element

{
  <>
//Kasus OK
<Component name="foo">
  <h1>Hello World</h1>
</Component>

//Kenapa OK?
// Children = 1 JSX.Element
// Cocok dengan tipe

//Error 1: banyak children
<Component name="bar">
  <h1>Hello World</h1>
  <h2>Hello World</h2>
</Component>

//Kenapa error?
// Children = JSX.Element[]
// Tapi tipe minta JSX.Element tunggal

// Error 2: JSX + string
<Component name="baz">
  <h1>Hello</h1>
  World
</Component>

//Kenapa error?
// Children = [JSX.Element, string]
// Tipe cuma izinkan JSX.Element
</>
}


//5. Cara yang lebih fleksibel (best practice)
// Biasanya dipakai:
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  name: string;
}
//ReactNode itu bisa:
// JSX element
// array
// string
// number
// fragment
// dll

// Hampir semua kasus children aman


//Ringkasan:
// Isi di antara <Component>...</Component> → props.children
// TypeScript mengecek tipe children
// JSX.Element = satu JSX saja
// Banyak JSX / JSX + teks → array / mixed
// Paling aman pakai ReactNode

//Kalimat kunci:
// “Children itu data biasa — dan TypeScript memperlakukannya seperti props lain.”