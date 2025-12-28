type Func = (a: string) => void;

function greeter(fn: Func) {
  fn('Hello World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}
