interface Pet {
  name: string;
}
class Dog {
  name: string;
}
let pet: Pet;
// OK, because of structural typing
pet = new Dog();

interface Pet {
  name: string;
}
let pet: Pet;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: 'Lassie', owner: 'Rudd Weatherwax' };
pet = dog;

interface Pet {
  name: string;
}
let dog = { name: 'Lassie', owner: 'Rudd Weatherwax' };
function greet(pet: Pet) {
  console.log('Hello, ' + pet.name);
}
greet(dog); // OK

let dog: Pet = { name: 'Lassie', owner: 'Rudd Weatherwax' }; // Error
