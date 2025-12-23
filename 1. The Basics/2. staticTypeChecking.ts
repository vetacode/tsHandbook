//TypeScript is a static type-checker that helps find the bugs before code runs
//it can mostly avoid the error at code runs, and easier debugging

const message = 'hello!';

message(); //in JavaScript its not showing error runtime
//in TypeScript it shows error immediately:
// This expression is not callable.
//   Type 'String' has no call signatures.
