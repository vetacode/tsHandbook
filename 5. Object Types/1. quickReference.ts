//Object types
function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name + ', ' + 'Your age is ' + person.age;
}
console.log(greet({ name: 'Rina', age: 18 })); // Hello Rina, Your age is 18
console.log(greet({ name: '', age: 18 })); // Hello , Your age is 18

//OR using interface
interface Person {
  name: string;
  age: number;
}

function greet2(person: Person) {
  return 'Hello ' + person.name;
}

//OR using type alias
type Person2 = {
  name: string;
  age: number;
};

function greet3(person: Person2) {
  return 'Hello ' + person.name;
}

//In all three examples above, we’ve written functions that take objects that contain the property name (which must be a string) and age (which must be a number).
