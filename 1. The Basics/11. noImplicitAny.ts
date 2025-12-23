function greet(person, date) {
  // with noImplicitAny: true => will show Error: Parameter 'person' implicitly has an 'any' type & Parameter 'date' implicitly has an 'any' type.
  console.log(`Hello ${person}, today is ${date}!`);
}

greet('Brendan');
