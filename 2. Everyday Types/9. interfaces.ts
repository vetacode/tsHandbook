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

//1. Extending type with intersections
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

//2. Adding new fields to an existing interface

//-----------MOCK-----------------
interface TypeScriptAPI {
  transpileModule(input: string, options: object): { outputText: string };
}

declare global {
  interface Window {
    ts: TypeScriptAPI;
  }
}
//--------------------------------

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

//this same as (automerged):
interface Window {
  title: string;
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

//2. Adding new fields to an existing Type?
//A type cannot be changed after being created
type Windows = {
  title: string;
};

type Windows = {
  // Error: Duplicate identifier 'Windows'.
  ts: TypeScriptAPI;
};

//3. The error difference interface vs type
type Mammal = {
  //  (property) name: string
  name: string;
};

// interface Mammal {
//   //  (property) Mammal.name: string
//   name: string;
// }

function echoAnimal(m: Mammal) {
  console.log(m.name);
}

echoAnimal({ name: 12345 });
