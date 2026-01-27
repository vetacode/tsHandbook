//Big picture
//Bayangin enum itu kayak daftar label dengan angka (atau string) di belakang layar.
enum Status {
  Draft,
  Published,
}
//TypeScript harus menentukan nilai setiap member.
// Caranya bisa:
// Langsung ketahuan saat compile time → constant
// Baru bisa dihitung pakai ekspresi JS → computed

//Pakai constant enum expression
//bisa dihitung saat compile
enum FileAccess {
  None, // 0
  Read = 1 << 1, // 2
  Write = 1 << 2, // 4
  ReadWrite = Read | Write, // 6
}

// | Member      | Hitungan | Hasil |     |
// | ----------- | -------- | ----- | --- |
// | `None`      | default  | `0`   |     |
// | `Read`      | `1 << 1` | `2`   |     |
// | `Write`     | `1 << 2` | `4`   |     |
// | `ReadWrite` | `2       | 4`    | `6` |

//Semua ini constant karena:
// Pakai angka literal
// Referensi ke enum sebelumnya
// Operator bitwise (|, <<) yang bisa dihitung saat compile

//Apa saja yang boleh dalam constant enum expression?
// ✔️ Literal angka / string
// ✔️ Referensi enum constant sebelumnya
// ✔️ Operator matematika & bitwise:
//    +, -, *, /, %,
//    <<, >>, >>>,
//    &, |, ^, ~

//Tidak boleh hasilnya: NaN dan Infinity

//Computed Enum Members (nilai baru ketahuan saat runtime)
enum FileAccess {
  G = '123'.length,
}
//Kenapa ini computed? Karena:
// "123".length itu ekspresi runtime JS
// TypeScript nggak bisa pastiin nilainya saat compile
// Walaupun hasilnya jelas 3, tetap dianggap computed.

//NOTE:
enum A {
  X, // constant
  Y = X + 1, // constant
  Z = Math.random(), // ❌ computed
}
