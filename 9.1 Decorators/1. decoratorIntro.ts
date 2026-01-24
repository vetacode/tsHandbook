// Decorator = fungsi khusus yang dipanggil saat runtime untuk:
// membaca info dari class / method / property, atau mengubah perilakunya
// Bentuknya selalu pakai @.

@sealed
class MyClass {}
//Artinya: jalankan fungsi sealed dan kasih dia info tentang MyClass!

//Decorator adlh function biasa
function sealed(target) {
  console.log(target);
}
//target = yang ditempeli decorator
// Kalau dipakai di class, maka:
//  target = constructor function dari class itu

//Bagaimana decorator diproses dan dijalankan:
@sealed
class User {}

//Saat runtime
sealed(User);
//Decorator langsung dieksekusi, ga perlu nunggu object dibuat/dipanggil (new User()).

{
  //Mental model Urutan eksekusinya:
  function sealed(target) {
    console.log('Decorator dijalankan');
  }

  @sealed
  class User {
    constructor() {
      console.log('Constructor dijalankan');
    }
  }

  console.log('Sebelum new');
  new User();
  console.log('Sesudah new');

  //Urutan Hasil log:
  // Decorator dijalankan
  // Sebelum new
  // Constructor dijalankan
  // Sesudah new
}

function sealed2(target) {
  // do something with 'target' ...
}
