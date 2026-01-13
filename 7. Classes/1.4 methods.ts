class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

let x: number = 0;

class C {
  x: string = 'hello';

  m() {
    // This is trying to modify 'x' from line 11 (type number), not the class property
    x = 'world';
    // Type 'string' is not assignable to type 'number'.

    //harusnya:
    this.x = 'world'; // this -> berarti “instance dari class ini”
  }
}

const c = new C();
c.m();
console.log(c.x); //world
console.log(x); //0
