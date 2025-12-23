function greet(person, date) {
  //type annotation is gone/erased
  console.log(
    'Hello '.concat(person, ', today is ').concat(date.toDateString(), '!') //change the template literal to concatenation strings
  );
}
greet('Maddison', new Date());
//use tsc to see what will be ereased after compiling to JS
