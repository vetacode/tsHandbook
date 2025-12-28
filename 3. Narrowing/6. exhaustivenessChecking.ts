interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

{
  //adding new member will shows error:
  interface Triangle {
    kind: 'triangle';
    sideLength: number;
  }

  type Shape = Circle | Square | Triangle; //adds new interfaces 'Triangle' will results error

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * shape.radius ** 2;
      case 'square':
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape; // Type 'Triangle' is not assignable to type 'never'.
        return _exhaustiveCheck;
    }
  }
}
