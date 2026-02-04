//Configuring JSX (compiler flags)

//TypeScript menyediakan beberapa flag JSX yang bisa diatur lewat:
// tsconfig.json
// atau pragma per-file (/** @jsx ... */)

//1. jsxFactory
//Menentukan fungsi apa yang dipanggil untuk setiap JSX element
// Contoh JSX:
<div />

// Akan diubah jadi:
React.createElement("div", null)

// Default untuk React (classic):
{
  "compilerOptions": {
    "jsxFactory": "React.createElement"
  }
}
//Ini Dipakai kalau:
// pakai React versi lama
// atau JSX custom (bukan React)

//2. jsxFragmentFactory
//Menentukan factory untuk fragment (<>...</>)
<>
  <span />
</>

// Default React:
React.createElement(React.Fragment, null, ...)

// Config:
{
  "compilerOptions": {
    "jsxFragmentFactory": "React.Fragment"
  }
}

//3. jsxImportSource (React 17+ / automatic runtime)
//Untuk JSX runtime modern (tanpa import React manual)

<div />

// Tidak lagi butuh:
import React from "react";

// Config:
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}

// Di balik layar, TS akan auto-import:
import { jsx } from "react/jsx-runtime";

//Digunakan juga oleh:
// Preact → "preact"
// Emotion → "@emotion/react"


//NOTES:
// | Bagian                      | Fungsi                                    |
// | --------------------------- | ----------------------------------------- |
// | React typings               | Mengajarkan TS cara membaca JSX ala React |
// | `Props`                     | Menentukan atribut JSX yang valid         |
// | `<MyComponent foo="bar" />` | Dicek ke `Props`                          |
// | `foo={0}`                   | Error karena tipe tidak cocok             |
// | `jsxFactory`                | Menentukan fungsi pembuat JSX             |
// | `jsxFragmentFactory`        | Menentukan handler fragment               |
// | `jsxImportSource`           | JSX runtime modern (React 17+)            |
