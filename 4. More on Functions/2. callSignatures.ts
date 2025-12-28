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
