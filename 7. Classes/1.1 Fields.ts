// @strictPropertyInitialization: true
class Point {
  x!: number;
  y!: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

class Point2 {
  x = 0;
  y = 0;
}

const pt2 = new Point2();
console.log(`${pt2.x}, ${pt2.y}`); //0, 0

//initializer of a class property will be used to infer its type
pt2.x = 1; // OK -> type number
pt2.x = '1'; //Error: Type 'string' is not assignable to type 'number'.

//--strictPropertyInitialization
//if sets true (or strict):
class Sports2 {
  name: string; // Error: Property 'name' has no initializer and is not definitely assigned in the constructor.
}

//Solution: create constructor to initialize
class Sports {
  name: string;

  constructor() {
    this.name = 'Soccer';
  }
}

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}
