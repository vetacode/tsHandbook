//Method Decorator adalah decorator yang dipasang tepat di atas sebuah method di dalam class.

class Greeter {
  @enumerable(false)
  greet() {
    return 'Hello';
  }
}

//Artinya:
// Decorator ini tidak nunggu object dibuat, tapi langsung dieksekusi saat class didefinisikan (runtime load).

//Method decorator bekerja pada Property Descriptor dari method tersebut (metadata” JavaScript tentang sebuah property/method):
// {
//   value: function greet() {},
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
//Jadi decorator bisa:
// mengamati method
// mengubah behavior method
// bahkan mengganti method sepenuhnya

{
  //Contoh @enumerable(false)
  class Greeter {
    greeting: string;

    constructor(message: string) {
      this.greeting = message;
    }

    @enumerable(false)
    greet() {
      return 'Hello, ' + this.greeting;
    }
  }

  //Implementasi decorator
  function enumerable(value: boolean) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) {
      descriptor.enumerable = value;
    };
  }
}

function deco() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(key);
  };
}

class A {
  @deco()
  foo() {
    return 1;
  }
}
