//1. Masalah yang Ingin Diselesaikan
//Nama namespace bisa panjang & berlapis:
Shapes.Polygons.Square;
Shapes.Polygons.Triangle;
// Kalau sering dipakai → ribet & tidak readable

//2. Solusi: Alias
import polygons = Shapes.Polygons;
//Ini import khusus TypeScript: hanya alias nama
//berlaku untuk:
// namespace
// type
// value

//Artinya:
// “Bikin nama pendek (alias) untuk Shapes.Polygons”

//Sekarang:
polygons.Square;

//sama dengan:
Shapes.Polygons.Square;
//Tidak ada loading file
//Tidak ada require
//Bukan ES module

//3. Contoh Lengkap (Dari Atas ke Bawah)
namespace Shapes {
  export namespace Polygons {
    export class Square {}
  }
}
//Namespace bertingkat:
// Shapes
// Shapes.Polygons
// Square

// Tanpa alias:
new Shapes.Polygons.Square();

// Dengan alias:
import polygons = Shapes.Polygons;
new polygons.Square();
