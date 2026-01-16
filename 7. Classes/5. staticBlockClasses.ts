//Static block adalah tempat inisialisasi “cerdas” untuk state static, dijalankan sekali saat class dibuat, dengan akses penuh ke private internals.

declare function loadLastInstances(): any[];
// ---cut---

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      const lastInstances = loadLastInstances();
      Foo.#count += lastInstances.length;
    } catch {}
  }
  //Inisialisasi state static berdasarkan data eksternal
  // Coba ambil data lama (loadLastInstances)
  // Hitung berapa jumlah instance sebelumnya
  // Tambahkan ke #count
  // Kalau gagal → diam (catch kosong)
}

const f = new Foo();
f.count; // baca nilai static #count
