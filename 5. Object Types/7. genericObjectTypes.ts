//if we dont know exactly yet the props type:
{
  interface Box {
    contents: any;
  }
}
//but any is not good, can lead to accidents down the line
{
  //we can use unknown instead (but not ideal)
  interface Box {
    contents: unknown;
  }

  //contents: unknown artinya:
  // kita tahu ada nilainya, tapi TypeScript tidak tahu tipenya apa
  // unknown lebih aman dari any
  // any → boleh dipakai seenaknya tapi bahaya
  // unknown → wajib dicek dulu sebelum dipakai

  let x: Box = {
    contents: 'HeLLo WORld',
  };

  // we have to check 'x.contents' before use
  if (typeof x.contents === 'string') {
    console.log(x.contents.toLowerCase()); //hello world
  } else if (typeof x.contents === 'number') {
    console.log(x.contents * 2);
  }

  // or we could use a type assertion
  console.log((x.contents as string).toLowerCase()); //hello world
  //klo pake type assertion, Kalau ternyata bukan string, error baru muncul di runtime, bukan compile time.
}

//SOLUTION: use generic
interface Box<T> {
  contents: T;
}

let x: Box<number | string> = {
  //using union
  // contents: 100,
  // contents: 'hello',
  contents: Math.random() > 0.5 ? 'hello' : 100,
};

if (typeof x.contents === 'number') {
  console.log(x.contents * 2);
} else if (typeof x.contents === 'string') {
  console.log(x.contents.toUpperCase());
}

//best practice
const val = x.contents;
typeof val === 'number' ? console.log(val * 2) : console.log(val.toUpperCase());

//using generic type is same as declaring the specific type with flexibility
{
  interface Box<Type> {
    contents: Type;
  }
  interface StringBox {
    contents: string;
  }

  let boxA: Box<string> = { contents: 'hello' };
  boxA.contents;
  //       ^ (property) Box<string>.contents: string

  let boxB: StringBox = { contents: 'world' };
  boxB.contents;
  //       ^(property) StringBox.contents: string
}

//with object generic type, we can avoid using overloads entirely
interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

//SOLUTION
{
  interface Box<T> {
    contents: T;
  }

  function setContents<T>(box: Box<T>, newContents: T) {
    box.contents = newContents;
    return `I say ${box.contents}, and you also reply ${newContents}`;
  }

  console.log(setContents({ contents: 'Hello' }, 'World')); //I say World, and you also reply World
  console.log(setContents({ contents: 100 }, 500)); //I say 500, and you also reply 500
  console.log(setContents({ contents: true }, false)); //I say false, and you also reply false
}
