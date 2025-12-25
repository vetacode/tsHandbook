interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Differences Between Type Aliases and Interfaces
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

//1. Extending interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

function getBear(): Bear {
  return {
    name: 'Winny',
    honey: true,
  };
}

const bear = getBear();
bear.name;
bear.honey;

//2. Extending type
{
  type Animal = {
    name: string;
  };

  type Bear = Animal & {
    honey: boolean;
  };

  function getBear(): Bear {
    return {
      name: 'Winny',
      honey: true,
    };
  }

  const bear = getBear();
  bear.name;
  bear.honey;
}
