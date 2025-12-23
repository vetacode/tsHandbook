const message: number = 'Hello World'; //Type 'string' is not assignable to type 'number'

console.log(typeof message); //string
console.log(message()); //TypeError: message is not a function => as mentioned above, message type is string, its not a function
console.log(message.toLocaleLowerCase());
