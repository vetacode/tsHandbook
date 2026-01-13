//Adding readonly prefix will prevents assignments to the field outside of the constructor.

class Greeter {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = 'not ok';
    // Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
g.name = 'also not ok';
// Cannot assign to 'name' because it is a read-only property.

const e = new Greeter('myName');
console.log(e.name); // 'myName'
