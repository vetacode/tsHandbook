//With strictNullChecks on, when a value is null or undefined, need checking for undefined before using an optional property
// use narrowing to check for values that might be null

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}
doSomething('Go get a success');
