//ENUMS
// Kebanyakan fitur TypeScript itu cuma ada di level tipe
// (contoh: interface, type, generics) -> hilang saat di-compile ke JavaScript

// Enum beda. -> Enum benar-benar menghasilkan kode JavaScript.

//Contoh
enum Direction {
  Up,
  Down,
}

//Hasil JS:
var Direction;
(function (Direction) {
  Direction[(Direction['Up'] = 0)] = 'Up';
  Direction[(Direction['Down'] = 1)] = 'Down';
})(Direction || (Direction = {}));

//Enum dipakai buat sekumpulan nilai tetap (konstanta) yang punya nama jelas.
// Tanpa enum:
function move(dir: number) {
  if (dir === 0) {
    /* up */
  }
}
// ❌ Jelek dibaca — 0 itu apa?

//Dengan Enum:
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(dir: Direction) {
  if (dir === Direction.Up) {
    /* up */
  }
}
//Lebih jelas, readable dan aman

//Dengan Enum bikin niat kode keliatan jelas
//tanpa enum:
status = 2;

//dengan enum:
status = status.paid;
//Lebih jelas, readable dan aman

//Enum sering dipakai buat case yang terbatas & jelas:
// Status
// Role user
// Arah
// Mode aplikasi

enum UserRole {
  Admin,
  Editor,
  Viewer,
}

function canDelete(role: UserRole) {
  switch (role) {
    case UserRole.Admin:
      return true;
    case UserRole.Editor:
      return false;
    case UserRole.Viewer:
      return false;
  }
}
//TypeScript bisa bantu:
// Autocomplete
// Warning kalau ada case belum ditangani

//TypeScript provides both numeric and string-based enums
// 🔢 Numeric Enum (default)

enum Status {
  Pending, // 0
  Paid, // 1
  Failed, // 2
}

{
  //custom angka
  enum Status {
    Pending = 1,
    Paid = 2,
    Failed = 3,
  }
}

//Ciri khas numeric enum:
Status.Paid; // 1
Status[1]; // "Paid"

{
  //🔤 String Enum
  enum Status {
    Pending = 'PENDING',
    Paid = 'PAID',
    Failed = 'FAILED',
  }
}

// Ciri:
// Lebih aman & eksplisit
// Tidak ada reverse mapping

// Sering dipakai buat:
// API
// Redux
// Data yang dikirim ke backend

//Best practice modern TS: string enum lebih sering direkomendasikan
