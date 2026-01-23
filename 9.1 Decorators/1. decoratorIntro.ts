// Decorator = fungsi khusus yang dipanggil saat runtime untuk:
// membaca info dari class / method / property
// atau mengubah perilakunya
// Bentuknya selalu pakai @.

@sealed
class MyClass {}
//Artinya: TS, jalankan fungsi sealed dan kasih dia info tentang MyClass!

//Decorator adlh function biasa
function sealed(target) {
  console.log(target);
}
//target = yang ditempeli decorator
// Kalau dipakai di class, maka:
//  target = constructor function dari class itu

//Contoh lain:
@sealed
class User {}

//Saat runtime
sealed(User);
