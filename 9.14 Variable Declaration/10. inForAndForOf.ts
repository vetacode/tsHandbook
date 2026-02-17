//🔹 using di dalam for ...
// Contoh:
for (using x = getReader(); !x.eof; x.next()) {
  // ...
}

// 📌 Artinya:
// x hidup selama loop berjalan
// x akan di-dispose sekali saja
// Dispose terjadi saat:
// - loop selesai
// - break
// - return
// - throw

// Jadi scope-nya = seluruh loop.


//🔹 using di dalam for..of
// Contoh:
for (using x of g()) {
  // ...
}

//📌 Bedanya:
// x di-dispose setiap akhir iterasi
// Lalu dibuat ulang untuk iterasi berikutnya

//Jadi alurnya:
// iterasi 1 → pakai x → dispose
// iterasi 2 → pakai x → dispose
// iterasi 3 → pakai x → dispose

// Ini cocok kalau setiap iterasi menghasilkan resource baru (misalnya file, koneksi, dll).

//🔹 await using juga sama konsepnya
//Kalau cleanup async:
// - using → dispose biasa
// - await using → dispose pakai await

// 🎯 Ringkasan Singkat
// | Dipakai di | Kapan dispose?            |
// | ---------- | ------------------------- |
// | `for`      | Sekali, saat loop selesai |
// | `for..of`  | Setiap akhir iterasi      |

//Intinya:
// for → satu resource untuk seluruh loop
// for..of → satu resource per iterasi 🔥