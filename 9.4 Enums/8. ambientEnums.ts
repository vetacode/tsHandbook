//Ambient enum adalah enum yang hanya untuk tipe, bukan untuk bikin kode JavaScript baru.

//Ciri utama: Pakai declare
// -> Dipakai buat mendeskripsikan enum yang SUDAH ADA di runtime
// (misalnya dari JS library, global variable, atau hasil compile lain)

declare enum Enum {
  A = 1,
  B,
  C = 2,
}
//Artinya:
//“Hei TypeScript, percayalah… enum ini sudah ada di JavaScript, aku cuma mau kamu tahu bentuknya.”
// ⚠️ TypeScript tidak akan generate JS untuk enum ini.

//2. Constant member vs Computed member (kilas cepat)
//Constant enum member:
// Nilainya bisa dihitung saat compile time
// Contoh: A = 1, B setelah angka

//Computed enum member:
// Nilainya tidak bisa dipastikan saat compile time
// Biasanya hasil ekspresi atau “nggak jelas nilainya”

//3. Perbedaan PENTING: enum biasa vs ambient enum
// ✅ Enum biasa (non-ambient)
enum RegularEnum {
  A = 1, // constant
  B, // constant → 2
  C = 2, // constant
  D, // constant → 3
}
//Aturannya:
// Kalau sebelumnya constant, maka yang tanpa initializer ikut constant
// TypeScript bisa auto-increment

//❌ Ambient enum (declare enum)
declare enum AmbientEnum {
  A = 1,
  B,
  C = 2,
}

//Perhatikan ini:
// Member   |	Status
// ------------------------
// A = 1    |	constant
// B        |	❌ computed
// C = 2    |	constant

//⚠️ B TIDAK dianggap constant, walaupun:
// sebelumnya A = 1
// kelihatannya harusnya 2

//4. Kenapa ambient enum beda? -> Karena TypeScript tidak mengontrol runtime-nya.

//Untuk enum biasa:
// TypeScript yang generate JS
// Jadi TS yakin 100% nilainya

//Untuk ambient enum:
// Nilai enum sudah ada di luar TypeScript

// Bisa jadi:
Enum.B = 999;
// Atau bahkan hasil logic runtime

//👉 Maka:
// Kalau tidak ditulis eksplisit nilainya, TypeScript menganggapnya computed

//5. Dampak praktisnya
// ❌ Ini ERROR di ambient enum
declare enum E {
  A = 1,
  B,
}
const x = E.B + 1; // ❌ Error (karena B dianggap computed)

// ✅ Ini AMAN
declare enum E {
  A = 1,
  B = 2,
}
const x = E.B + 1; // OK

//6. Ringkasan:
//Enum biasa:
// TS bikin JS
// Auto-increment aman
// Member tanpa initializer bisa constant

//Ambient enum (declare enum):
// TS cuma “percaya” enum sudah ada
// Tidak tahu nilai runtime
// Member tanpa initializer SELALU computed

//7. Kapan kamu pakai ambient enum?

//Biasanya saat:
// Typing library JS lama
// Typing global enum dari window
// Menulis .d.ts
