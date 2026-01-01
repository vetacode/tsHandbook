function doSomething(): number {
  return 42;
}

function callMeMaybe(callback: () => void) {
  callback();
}

// Expected an error because 'doSomething' returns number, but 'callMeMaybe' expects void-returning function
callMeMaybe(doSomething);
