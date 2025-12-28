type greetFunc = (a: string) => void;

function greeter(fn: greetFunc) {
  fn('Hello World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
