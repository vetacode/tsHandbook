{
  const message: number = 'Hello World'; //Type 'string' is not assignable to type 'number'

  console.log(typeof message); //string
  console.log(message()); //TypeError: message is not a function => as mentioned above, message type is string, its not a function
  console.log(message.toLocaleLowerCase());
}

//type is the concept of describing which values can be passed to fn and which will crash, while JavaScript only truly provides dynamic typing - running the code to see what happens.
//The solution is using a static type system to make predictions about what the code is expected to do before it runs.
function fn(x: string) {
  return x.toLocaleLowerCase();
}
console.log(fn('HOME')); //home
