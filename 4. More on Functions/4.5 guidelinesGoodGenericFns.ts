// 1. Push Type Parameters Down
//    Here are two ways of writing a function that appear similar:
//    Rule: When possible, use the type parameter itself rather than constraining it
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

//2. Use Fewer Type Parameters
//   Here’s another pair of similar functions:
//   Rule: Always use as few type parameters as possible
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>( // RED FLAG: parameter Func that doesn’t relate two values
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

//3. Type Parameters Should Appear Twice
//   Sometimes we forget that a function might not need to be generic:
//   Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s);
}
greet('world');

//just write simpler version:
function greet2(s: string) {
  console.log('Hello, ' + s);
}
greet2('world');
