//if we dont know exactly yet the props type:
{
  interface Box {
    contents: any;
  }
}
//but any is not good, can lead to accidents down the line

//use unknown instead
interface Box {
  contents: unknown;
}

let x: Box = {
  contents: 100,
};

// we could check 'x.contents'
if (typeof x.contents === 'string') {
  console.log(x.contents.toLowerCase()); //hello world
} else if (typeof x.contents === 'number') {
  console.log(x.contents * 2);
}

// or we could use a type assertion
console.log((x.contents as string).toLowerCase()); //hello world
