//tidak semua declaration boleh digabung (merge). Salah satu aturan pentingnya:

// class TIDAK bisa di-merge dengan class lain atau dengan variable

// KARENA: class itu menghasilkan value runtime + type, dan TypeScript ingin menjaga agar bentuk runtime-nya tidak ambigu / tidak bentrok.

// Kalau dipaksa merge, TypeScript bingung:
// constructor mana yang dipakai?
// value mana yang menang di runtime?

//Contoh: Class dgn Class lgsg Error //Duplicate identifier 'User'
class User {
  name: string;
}

class User {
  age: number;
}

{
  //Class dgn Variable jg Ga BOleh: Error Cannot redeclare block-scoped variable 'Product'
  class Product {
    price: number;
  }

  const Product = {
    category: 'Book',
  };
  //class Product → value + type
  //const Product → value
  // bentrok di runtime scope
}

//Yang BOleh:
interface User {
  name: string;
}

interface User {
  age: number;
}

// hasil merge
const u: User = {
  name: 'A',
  age: 20,
};

//NOTES:
//Kalau butuh “mirip” class merging:
// gunakan Mixins
// atau composition
// atau interface + class implements
