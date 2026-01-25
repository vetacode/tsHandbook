//Intinya dulu (TL;DR)
// 👉 Namespace di TypeScript bisa digabung (merge)
// 👉 Yang di-export = bisa dipakai lintas namespace
// 👉 Yang nggak di-export = cuma hidup di “file/deklarasi asalnya”

namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export class Dog {}
}

//Hasil merge:
namespace Animals {
  export class Zebra {}
  export class Dog {}
}
//Zebra & Dog bisa dipakai bareng

//export = PUBLIC
// Bisa diakses dari namespace lain
// Ikut ke hasil merge

//tanpa export = PRIVATE
// Hanya bisa dipakai di blok namespace itu aja
// Namespace lain yang “merge” nggak bisa lihat

namespace Animal {
  let haveMuscles = true;

  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}
// haveMuscles PRIVATE
// animalsHaveMuscles PUBLIC
//AMAN: coz function & variable ada di namespace yang sama

namespace Animal {
  // export let haveMuscles = true;
  export function doAnimalsHaveMuscles() {
    return haveMuscles; //Error: coz haveMuscles ga di export -> namespace ini ga kenal haveMuscles //Cannot find name 'haveMuscles'.
  }
}

//Solusi: export haveMuscles
namespace Animal {
  export let haveMuscles = true;

  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}
