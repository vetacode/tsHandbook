// Call signature = cara TypeScript mendeskripsikan object yang bisa dipanggil
// Digunakan saat function punya properti
// Ditulis di dalam object type
// Sangat berguna untuk API design yang idiomatik JavaScript

type DescribableFunction = {
  description: string;
  (someArg: number): boolean; //call signature in an object type
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6)); //default description returned true
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = 'default description';

console.log(myFunc); //[Function: myFunc] { description: 'default description' }

doSomething(myFunc);

// Gunakan call signatures jika:
//    fungsi punya property tambahan
//    mengikuti pola JavaScript “function as object”
//    membuat API fleksibel (plugin, hook, middleware, validator)

// Ga perlu call signature jika:
//    fungsi hanya dipanggil tanpa property
//    cukup dengan (args) => returnType
