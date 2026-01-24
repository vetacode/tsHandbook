//Class Decorator:
// Ditaruh tepat sebelum class
// Dieksekusi saat runtime, bukan saat object dibuat
// Targetnya constructor function dari class itu

//Contoh - @sealed tidak mengganti class

//Class
@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

//Decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

//Saat runtime:
// Class didefinisikan ->  Decorator dipanggil (sealed(BugReport))
