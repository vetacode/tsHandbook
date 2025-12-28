// discriminated union is When every type in a union contains a common property with literal types
// ==> can narrow out the members of the union

interface Shape {
  kind: 'circle' | 'square';
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === 'rect') {
    // This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
  }
}

function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
  // 'shape.radius' is possibly 'undefined'.
}

function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
    // 'shape.radius' is possibly 'undefined'.
  }
}

//solution: force it with !
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius! ** 2;
  }
}

//but that is not ideal. non-null assertions (!) type checker assertions are error-prone if we start to move code around

{
  //Other Solution: pisahkan interface
  //Discriminated union terjadi karena:
  //    setiap type (Circle, Square)
  //    punya property yang sama (kind)
  //    dengan string literal yang berbeda
  interface Circle {
    kind: 'circle'; //'kind' is a discriminant property of Shape
    radius: number;
  }

  interface Square {
    kind: 'square'; //'kind' is a discriminant property of Shape
    sideLength: number;
  }

  type Shape = Circle | Square; // Discriminated union: union of types that share a common literal property (`kind`)

  function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2; //shape: Shape
    // Property 'radius' does not exist on type 'Shape'.
    //   Property 'radius' does not exist on type 'Square'.
  }

  //use type narrowing in discriminated union
  function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
      return Math.PI * shape.radius ** 2; //shape: Circle ==> radius is available
    }
  }
}

{
  // The same checking works with switch statements as well. Now we can try to write our complete getArea without any pesky ! non-null assertions.

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

      // (parameter) shape: Circle
      case 'square':
        return shape.sideLength ** 2;

      // (parameter) shape: Square
    }
  }
}
