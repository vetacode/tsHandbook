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
