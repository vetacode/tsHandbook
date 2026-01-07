interface User {
  name: string;
  age: number;
}

function findUser(id: string): User | undefined {
  // return { name: 'Boby', age: 30 };
  return;
}

const user = findUser('123');
if (user) {
  console.log(`${user.name} age is ${user.age}`); //Boby age is 30
} else {
  console.log('User Not Found');
}
