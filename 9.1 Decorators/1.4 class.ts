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

//example of how to override the constructor to set new defaults.
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}

@reportableClassDecorator
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport('Needs dark mode');
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
bug.reportingURL;
// Property 'reportingURL' does not exist on type 'BugReport'.
