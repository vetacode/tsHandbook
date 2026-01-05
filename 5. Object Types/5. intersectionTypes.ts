//An intersection type is defined using the & operator.

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'blue', radius: 50 });
draw({ color: 'red', raedius: 50 }); //if typos
//                      ^ Object literal may only specify known properties, but 'raedius' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?
