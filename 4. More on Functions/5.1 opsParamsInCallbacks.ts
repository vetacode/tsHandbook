function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
// 1
// 2
// 3

myForEach([1, 2, 3], (a, i) => console.log(a, i));
// 1 0
// 2 1
// 3 2

// Rule: When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

//MISTAKES
function myForEach2(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}

myForEach2([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
  // 'i' is possibly 'undefined'.
});
