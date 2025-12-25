function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}
// OK
printId(101);
// OK
printId('202');
// Error
printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

function printTextOrNumberOrBool(
  textOrNumberOrBool: string | number | boolean
) {
  console.log(textOrNumberOrBool);
}

//has to use the method that available for both union type
function printId(id: number | string) {
  console.log(id.toUpperCase());
  // Property 'toUpperCase' does not exist on type 'string | number'.
  //   Property 'toUpperCase' does not exist on type 'number'.
}

//SOLUTION: Use narrowing
function printId(id: number | string) {
  if (typeof id === 'string') {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

//other narrowing example
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log('Hello, ' + x.join(' and '));
  } else {
    // Here: 'x' is 'string'
    console.log('Welcome lone traveler ' + x);
  }
}

//If every member in a union has a property in common, you can use the property without narrowing:
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
