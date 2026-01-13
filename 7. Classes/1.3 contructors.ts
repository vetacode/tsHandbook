class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    //Signature constructor nya -> constructor(x?: number, y?: number)

    this.x = x;
    this.y = y;
  }
}

//Signature -> kontrak cara pemanggilan
{
  //Constructor with overload signature
  class Point {
    x: number;
    y: number;

    constructor();
    constructor(xy: string);
    constructor(x: number, y: number);

    constructor(x: number | string = 0, y = 0) {
      this.x = 0;
      this.y = 0;
    }
  }

  new Point(); //OK -> masuk ke overload pertama (no argument/param)
  new Point('12'); //OK -> masuk ke overload ke 2 (satu argumen (xy) dgn type string)
  new Point(2, 6); // OK -> overload ke 3 (2 argumen dgn type number)
  new Point(10); //Error: ga ada overload dgn signature 1 argument type number
  //    ^ No overload expects 1 arguments, but overloads do exist that expect either 0 or 2 arguments.
}

{
  //NOTES:
  //Constructor tdk boleh punya return type
  // Tidak boleh -> constructor(x: number): Point { }
  //Constructor selalu mengembalikan instance class itu sendiri
  // new Point() → otomatis bertipe Point

  //Constructore tdk boleh punya type parameter
  class Box {
    constructor<T>(value: T) {}
    //          ^ Type parameters cannot appear on a constructor declaration.
  }

  //Solusi
  class Box2<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }
  }

  //Constructor hanyalah bagian dari class
  // Generic adalah konsep milik class, bukan constructor
  // Instance type ditentukan saat new Box<number>(), bukan di constructor
}
