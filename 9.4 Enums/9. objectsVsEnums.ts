// Enum vs Object 'as const' di TypeScript

//1. enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// Fitur khusus TypeScript
// Saat di-compile, ada kode tambahan di JavaScript
// Praktis dipakai langsung sebagai type + value

function walk(dir: Direction) {}
walk(Direction.Left);

// ✅ Simple
// ❌ Bukan JavaScript murni

//2. Object + as const
const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// JavaScript murni (tidak ada enum di JS)
// as const bikin value jadi literal & readonly
// Bisa dipakai sebagai value, tapi perlu sedikit ekstra buat type

type DirectionType = (typeof Direction)[keyof typeof Direction];

function run(dir: DirectionType) {}
run(Direction.Right);
// ✅ Lebih dekat ke JavaScript
// ✅ Tidak ada magic saat runtime
// ❌ Lebih panjang sedikit

//Kenapa banyak orang sekarang pilih object + as const?
// Lebih predictable (apa yang kamu tulis = apa yang jalan di JS)
// Tidak ada perilaku enum yang “aneh” di runtime
// Lebih future-proof → kalau nanti JavaScript punya enum sendiri, lebih gampang migrasi

//Ringkasan:
// | Enum             | Object `as const`        |
// | ---------------- | ------------------------ |
// | TypeScript only  | JavaScript murni         |
// | Lebih singkat    | Sedikit lebih verbose    |
// | Ada runtime code | Tidak ada ekstra runtime |
// | Kadang tricky    | Lebih jelas & aman       |

//👉 Rule praktis:
// Library / shared code → object + as const
// Proyek kecil / internal → enum masih oke
