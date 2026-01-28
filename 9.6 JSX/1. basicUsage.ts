// JSX itu syntax mirip HTML/XML yang bisa ditulis di dalam JavaScript / TypeScript.

//Contoh:
// const el = <div>Hello</div>;

//Ini bukan HTML asli
//Ini akan diubah (compile) jadi JavaScript biasa

//Biasanya dipakai di React, tapi sebenarnya JSX tidak khusus React.

//Browser nggak ngerti JSX.
//Jadi yg terjadi dblkg layar:

//    JSX → JavaScript biasa → dijalankan browser

//TypeScript bisa:
// baca JSX
// cek tipe (type checking)
// ubah JSX jadi JavaScript

//Syarat pakai JSX di TypeScript
//Ada 2 hal wajib:
// 1. File harus .tsx
// component.tsx  (Aman)
// component.ts    (JSX error)

// 2. Aktifkan jsx di tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}

//MODE JSX di TypeScript
//Mode JSX itu menentukan JSX akan diubah jadi apa

//1. React (React lama / classic runtime)
// <div />
//    ⬇️
React.createElement("div")

//Cara React sebelum React 17
// Harus import React from "react"
// Output: .js

//2. React-jsx (React modern 🔥)
// <div />
//   ⬇️
_jsx("div", {}, void 0);

//React 17+:
// Tidak perlu import React
// Sekarang paling umum dipakai
// Output: .js

//3. React-jsxdev
<div />
  ⬇️
_jsxDEV("div", {}, void 0, false, {...}, this);

// Sama seperti react-jsx
// Tapi khusus development
// Ada info tambahan untuk debugging

//NOTES:
// JSX = syntax HTML-like di JS/TS
// Browser nggak ngerti → harus di-compile
// TypeScript bisa compile JSX
// Mode JSX menentukan hasil JavaScript-nya
// React modern = react-jsx