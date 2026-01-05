//The same name of type will be merged
interface Animal {
  life: string;
  species: string;
}
interface Animal {
  health: number;
}

interface Dog {
  skill: string;
}

// type Jenis = Dog & Animal;

function whichAnimal(shout: Dog & Animal) {
  console.log(
    `The ${shout.species} has ${shout.health}% health, still ${shout.life}, and can ${shout.skill} `
  );
}

whichAnimal({ life: 'Alive', species: 'Dog', health: 100, skill: 'bark' });

//these interface merging will results in a never type:
interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

type Staff = Person1 & Person2;

declare const staffer: Staff;
staffer.name;
//        ^ (property) name: never
// coz Staff would require the name property to be both a string and a number

interface Human1 {
  name: string;
}
interface Human2 {
  age: number;
}

interface Humanus extends Human1, Human2 {
  height: number;
}
