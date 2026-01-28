//Di JSX ada 2 jenis elemen dan TypeScript ngecek tipenya dengan cara berbeda:

//1. Intrinsic elements
// Contoh: <div />, <span />
// Huruf kecil
// Sudah bawaan lingkungan (DOM)
// Type atributnya diambil dari definisi bawaan TypeScript (misalnya div boleh punya className, onClick, dll)

//2. Value-based elements (Component)
// Contoh: <MyButton />, <Header />
// Huruf besar
// Komponen buatan sendiri
// Type atributnya diambil dari props yang kamu definisikan di komponen itu

//NOTES:
// Huruf kecil → HTML/DOM bawaan
// Huruf besar → Komponen React
// TypeScript pakai aturan ini untuk tahu dari mana ambil tipe props-nya
