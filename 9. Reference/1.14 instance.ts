// Input → constructor function / class
// Output → instance (objek hasil new)

class Mobil {
  roda = 4;
}
//Mobil → pabrik
//new Mobil() → produk
//InstanceType<typeof Mobil> → tipe produk

{
  class C {
    x = 0;
    y = 0;
  }

  type T0 = InstanceType<typeof C>; //type T0 = C;
  //typeof C → tipe constructor dari class C (harus constructor type)
  // InstanceType<typeof C> → tipe objek hasil new C()
}

{
  //Dibelakang layar:
  type InstanceType<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer R ? R : any;
  //T harus bisa dipanggil dengan new
}

//Aplikasi di project:
//1. Framework/Factory
function create<T extends new (...args: any[]) => any>(
  Ctor: T,
): InstanceType<T> {
  return new Ctor();
}
//Return type otomatis mengikuti class yang dikirim

//Generic helper untuk class
class User {
  name = 'A';
}

class Product {
  price = 100;
}

type UserInstance = InstanceType<typeof User>;
type ProductInstance = InstanceType<typeof Product>;

//Library typing
function register<T extends abstract new (...args: any) => any>(ctor: T) {
  type Instance = InstanceType<T>;
}

// | Utility                    | Input       | Output          |
// | -------------------------- | ----------- | --------------- |
// | `Parameters<F>`            | function    | tuple parameter |
// | `ReturnType<F>`            | function    | return value    |
// | `ConstructorParameters<C>` | constructor | parameter `new` |
// |   `InstanceType<C>`        | constructor | **instance**    |
