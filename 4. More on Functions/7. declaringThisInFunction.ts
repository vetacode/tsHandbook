const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
console.log(user.admin); //false

user.becomeAdmin();
console.log(user.admin); //true

//Declare type for 'this' in the function body

interface User {
  id: number;
  admin: boolean;
}
declare const getDB: () => DB;
// ---cut---
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

console.log(admins);
