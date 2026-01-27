//String enum adalah enum yang value-nya berupa string, bukan angka.

// Setiap member wajib di-inisialisasi dengan:
// string literal, atau
// member string enum lain

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

//Perbedaan utama dengan Numeric Enum
// 1. Tidak ada auto-increment

// Numeric enum:
enum Status {
  Success, // 0
  Failed, // 1
}

// String enum tidak bisa seperti ini:
enum Status {
  Success, // ERROR
}

// Harus eksplisit:
enum Status {
  Success = 'SUCCESS',
  Failed = 'FAILED',
}

//2. Lebih “bermakna” saat runtime (serialize well)
// Numeric enum (kurang jelas saat runtime)
enum Direction {
  Up,
  Down,
}
console.log(Direction.Up); // 0
// Kalau kamu lihat log 0, itu tidak langsung jelas artinya apa tanpa tahu enum-nya.

//String enum (jelas & readable)
console.log(Direction.Up); // "UP"

//APLIKASI real project
//kirim data ke backend API
fetch('/api/move', {
  method: 'POST',
  body: JSON.stringify({
    direction: Direction.Left,
  }),
});

//Payload
{
  "direction": "LEFT"
}

// Jelas
// Kalau numeric enum → "direction": 2 (ambigu)

//Kekurangan String Enum
// Tidak ada reverse mapping
// Numeric enum:
enum Status {
  Success,
  Failed,
}
Status[0]; // "Success"

// String enum:
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
}
Status["SUCCESS"]; // undefined
// Jadi string enum satu arah saja (name → value).

//NOTES
// | Aspek            | Numeric Enum  | String Enum  |
// | ---------------- | ------------  | -----------  |
// | Auto increment   | ✅            | ❌           |
// | Readable runtime | ❌            | ✅           |
// | Serialize / API  | ❌            | ✅           |
// | Reverse mapping  | ✅            | ❌           |

