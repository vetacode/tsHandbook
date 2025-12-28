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

//but tht is error prone at the projects
