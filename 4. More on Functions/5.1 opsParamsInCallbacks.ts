//MISTAKES
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// Rule: When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
