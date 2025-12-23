function greet(person, date) {
  //annotation hilang
  console.log(`Hello ${person}, today is ${date.toDateString()}!`); //tetap pakai template literal ES2015
}
greet('Maddison', new Date());
//use tsc --target es2015 [filename] to prevent downleveling
