//Merging Namespaces with Classes, Functions, and Enums

//Declaration merging di TypeScript memungkinkan:
// Satu nama dipakai oleh lebih dari satu deklarasi
// Semua deklarasi itu digabung jadi satu entitas

//Aturan penting:
// namespace HARUS ditulis setelah class / function / enum yang ingin di-merge.

//1. Merging Namespace dengan Class
class Album {
  label: Album.AlbumLabel;
}

namespace Album {
  export class AlbumLabel {}
}
// Album adalah class
// Album juga punya namespace
// Namespace ini menambahkan member statis ke class

//Kenapa export wajib? coz Namespace punya aturan visibility -> Kalau ga export, class Album ga bisa melihatnya

//2. Namespace + Class = Static Member Tambahan
//Namespace bisa dipakai untuk:
// Menambah static property
// Menambah static helper

class User {}

namespace User {
  export const role = 'admin';
}

//usage:
User.role;

//3. Merging Namespace dengan Function
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = '';
  export let prefix = 'Hello, ';
}
//Yang Digabung:
// buildLabel() → function
// buildLabel.prefix → property
// buildLabel.suffix → property

//Hasil akhir:
buildLabel('Sam Smith');
// "Hello, Sam Smith"

//4. Merging Namespace dengan Enum
enum Color {
  red = 1,
  green = 2,
  blue = 4,
}

namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == 'yellow') {
      return Color.red + Color.green;
    } else if (colorName == 'white') {
      return Color.red + Color.green + Color.blue;
    }
  }
}

//Yang terjadi
Color.red; // enum value
Color.mixColor('redyew'); // function

// | Target   | Namespace Dipakai Untuk    |
// | -------- | -------------------------- |
// | Class    | Inner class, static member |
// | Function | Property & config          |
// | Enum     | Helper & logic tambahan    |
