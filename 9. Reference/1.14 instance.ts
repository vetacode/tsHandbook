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
