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

// | Konsep               | Inti Penjelasan                                                              |                              |
// | -------------------- | ---------------------------------------------------------------------------- | ---------------------------- |
// | JSX result type      | Hasil JSX bertipe `any` secara default atau `JSX.Element` jika dikustomisasi |                              |
// | `JSX.Element`        | Hanya representasi abstrak (black box), tanpa info elemen/props              |                              |
// | Function return type | Default `JSX.Element                                                         | null`, tapi bisa disesuaikan |
// | `JSX.ElementType`    | Menentukan apa yang sah sebagai komponen JSX (TS 5.1+)                       |                              |
// | Props typing         | Selalu berasal dari parameter pertama komponen                               |                              |
// | Embedded expressions | Sepenuhnya di–type check seperti ekspresi TypeScript biasa                   |                              |
