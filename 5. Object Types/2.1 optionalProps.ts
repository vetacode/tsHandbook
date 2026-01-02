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

const shape = getShape();
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

function paintShape3({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x coordinate at', xPos);
  //                              ^ (parameter) xPos: number
  console.log('y coordinate at', yPos);
  //                              ^ (parameter) yPos: number
  // ...
}
