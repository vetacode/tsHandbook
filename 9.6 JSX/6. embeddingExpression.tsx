//Embedding Expressions di JSX
//1. Konsep dasar
//JSX mengizinkan penyisipan ekspresi JavaScript menggunakan {}:

<div>{expression}</div>;

//Ekspresi ini:
// harus berupa ekspresi, bukan statement,
// akan di–type check sepenuhnya oleh TypeScript.

//2. Contoh kasus error
const a = (
  <div>
    {['foo', 'bar'].map((i) => (
      <span>{i / 2}</span>
    ))}
  </div>
);

//Analisis tipe:
// ["foo", "bar"] → string[]
// map((i) => ...) → i: string
// i / 2 → Error, karena operator / tidak valid antara string dan number

//TypeScript mendeteksi error ini sebelum JSX diubah menjadi JavaScript.

//3. Hasil transformasi JSX (jsx: preserve)
// Jika opsi compiler jsx: "preserve" digunakan, JSX tidak diubah, hanya callback map yang ditransformasikan:

const a = (
  <div>
    {['foo', 'bar'].map(function (i) {
      return <span>{i / 2}</span>;
    })}
  </div>
);

//Penting:
// Transformasi ini tidak menghilangkan error tipe
// Type checking dilakukan pada tahap TypeScript AST, bukan pada hasil JavaScript
