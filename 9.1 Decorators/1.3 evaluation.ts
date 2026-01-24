//Urutan Resmi Decorator (versi TS)
// Parameter Decorators → Method/Accessor/Property (untuk instance member)
// Parameter Decorators → Method/Accessor/Property (untuk static member)
// Parameter Decorators pada constructor
// Class Decorator

//Helper decorator
function log(msg: string) {
  return function (...args: any[]) {
    console.log(msg);
  };
}

//Contoh class lengkap dengan semua jenis decorator
@log('4 Class Decorator')
class User {
  constructor(
    @log('3 Constructor Parameter Decorator')
    name: string,
  ) {}

  // INSTANCE PROPERTY
  @log('1 Instance Property Decorator')
  username!: string;

  // INSTANCE METHOD
  @log('1 Instance Method Decorator')
  updateProfile(
    @log('1 Instance Method Parameter Decorator')
    age: number,
  ) {}

  // STATIC METHOD
  @log('2 Static Method Decorator')
  static create(
    @log('2 Static Method Parameter Decorator')
    name: string,
  ) {}
}

//Output saat file dijalankan
// 1 Instance Method Parameter Decorator
// 1 Instance Method Decorator
// 1 Instance Property Decorator

// 2 Static Method Parameter Decorator
// 2 Static Method Decorator

// 3 Constructor Parameter Decorator

// 4 Class Decorator

//Instance member
updateProfile(
  @log("Parameter")
  age: number
) {}

