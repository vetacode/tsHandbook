// It makes handling null and undefined more explicit => Spares us from worrying about whether we forgot to handle null and undefined.

declare const loggedInUsername: string;

const users = [
  { name: 'Oby', age: 12 },
  { name: 'Heera', age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);

// When strictNullChecks: true
type Array = {
  find(predicate: (value: any, index: number) => boolean): S | undefined;
};

// When strictNullChecks: false the undefined is removed from the type system,
// allowing you to write code which assumes it always found a result
type Array = {
  find(predicate: (value: any, index: number) => boolean): S;
};
