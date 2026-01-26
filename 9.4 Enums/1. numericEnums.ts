//1. Numeric enum adalah enum yang nilainya berupa angka.
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
//Up = 1 → nilai awal
// Yang lain auto-increment

//Hasil akhir:
Direction.Up; // 1
Direction.Down; // 2
Direction.Left; // 3
Direction.Right; // 4

//Aturan penting: Kalau satu member diberi angka, maka member setelahnya otomatis +1

//2. Auto-increment tanpa initializer
// Kalau tidak ada initializer sama sekali:
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// Maka:
Up = 0;
Down = 1;
Left = 2;
Right = 3;
// Default-nya mulai dari 0

//3. Kenapa auto-increment itu berguna?
// Karena sering kali:
// Kita tidak peduli angka pastinya
// Yang penting setiap value unik

// Contoh:
enum Tab {
  Home,
  Profile,
  Settings,
}
// Yang penting:
// Tab.Home !== Tab.Profile
// Aman dipakai buat switch, state, dll

//4. Cara pakai enum
//sebagai value
UserResponse.Yes;

//sebagai type
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond('Princess Caroline', UserResponse.Yes);

//Tidak bisa kirim sembarang angka
// Hanya UserResponse.No atau UserResponse.Yes

//Constant member vs Computed member
//constant member -> Nilainya bisa dihitung saat compile time
enum E {
  A = 1,
  B, // 2
  C = 5,
  D, // 6
}
//atau
enum E {
  A = 1 + 2, // masih constant
}

//computed enum member -> Nilainya baru diketahui saat runtime:
enum E {
  A = getSomeValue(), // computed
}
//Kenapa ERROR?
enum E {
  A = getSomeValue(),
  B, //  ERROR Enum member must have initializer.
}
//A nilainya tidak diketahui saat compile time
// TypeScript tidak tahu harus mulai dari angka berapa untuk B
