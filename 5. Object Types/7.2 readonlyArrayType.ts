// it is a special type that describes arrays that shouldn’t be changed.
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push('hello!');
  //      ^ Property 'push' does not exist on type 'readonly string[]'.
}
doStuff(['rina']);
