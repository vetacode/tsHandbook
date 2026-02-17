//Kalau using untuk cleanup sinkron,
// maka await using untuk cleanup asinkron (butuh await).

//Artinya: Saat keluar dari block, JavaScript akan:
// await x[Symbol.asyncDispose]();

//🔹 Kenapa Perlu?
// Karena ada resource yang cleanup-nya butuh waktu, misalnya:
// - Commit / rollback database
// - Flush file ke disk
// - Tutup koneksi network
//Cleanup seperti ini perlu await.

// 🔹 Contoh Sederhana
async function f() {
  await using x = new C();
}

// Saat keluar block:
// await x[Symbol.asyncDispose]();

//🔹 Syarat Object
// Object harus punya method ini:
[Symbol.asyncDispose]() {
  return Promise
}

// Contoh sederhana:
class Test {
  async [Symbol.asyncDispose]() {
    console.log("cleanup async...");
  }
}

//🔹 Contoh Real Case: Database Transaction
// Konsepnya:
// 1. Mulai transaksi
// 2. Kalau sukses → commit
// 3. Kalau error → rollback
// 4. Semua otomatis saat keluar block

async function transfer(db) {
  await using tx = await DatabaseTransaction.create(db);

  // kalau error sebelum success = true
  // otomatis rollback

  tx.success = true; // kalau sampai sini → commit
}

// Jadi tidak perlu manual tulis:
// try { ... } finally { ... }

//🔹 Perbedaan Penting
// Ini sering bikin bingung 👇

// ❌ Salah paham:
// await using BUKAN berarti menunggu nilai dibuat.
// Yang di-await adalah proses cleanup, bukan pembuatan object.

// Contoh:
await using x = getResourceSynchronously();

// Yang ditunggu nanti adalah:
await x[Symbol.asyncDispose]()

// Kalau resource dibuat async:
await using x = await getResourceAsync();
// Tetap yang di-await saat keluar block adalah asyncDispose.

//🔹 Hati-Hati dengan return
// Contoh bermasalah:
async function f() {
  await using x = new C();
  return g(); // ❌ tidak di-await
}

// Kenapa bahaya?
// Karena:
// Cleanup sedang di-await
// Tapi Promise dari g() belum di-await
// Bisa muncul unhandled rejection

//✅ Cara Aman
// Selalu await return Promise:
async function f() {
  await using x = new C();
  return await g(); // ✅ aman
}

//KESIMPULAN:
//await using = seperti using, tapi untuk cleanup yang butuh await.