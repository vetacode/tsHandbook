interface Func {
  a: string;
}

function greeter(fn: (a: string) => void) {
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
