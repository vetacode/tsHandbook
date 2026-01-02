interface Shape {}
declare function getShape(): Shape;
// ---cut---

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

// function getShape() {}

// const shape = getShape();

paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

function paintShape2(opts: PaintOptions) {
  let xPos = opts.xPos;

  // (property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;

  // (property) PaintOptions.yPos?: number | undefined
  // ...
}

function paintShape4(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
  //..
}

function paintShape3({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x coordinate at', xPos);
  //                              ^ (parameter) xPos: number
  console.log('y coordinate at', yPos);
  //                              ^ (parameter) yPos: number
  // ...
}
paintShape3({ shape: '' });

// @noImplicitAny: false
// @errors: 2552 2304
interface Shape {}
declare function render(x: unknown);
// ---cut---
function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
  // artinya: Ambil properti shape, lalu simpan ke variable lokal bernama Shape -> renaming
  // artinya: Ambil property xPos, lalu simpan ke variabel lokal bernama number, default 100
  // Ga bisa pake type annotation di destructuring pattern, jatohnya renaming variable.
  render(shape); //Cannot find name 'shape'. Did you mean 'Shape'? -> var 'shape' udh renamed jadi 'Shape'.
  render(xPos); //Cannot find name 'xPos'.
}

//SOLUSI: Syntax yg benar untuk memberikan type annotation di destructuring parameter

function draw2({ shape, xPos = 100 }: { shape: Shape; xPos: number }) {
  render(shape);
  render(xPos);
}

//OR pake interface
interface DrawParams {
  shape: Shape;
  xPos: number;
}
function draw3({ shape, xPos = 100 }: DrawParams) {
  render(shape);
  render(xPos);
}
