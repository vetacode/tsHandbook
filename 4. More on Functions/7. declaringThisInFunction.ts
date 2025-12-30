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

interface DB {
  users: User[];
  filterUsers(filter: (this: User) => boolean): User[];
}

function getDB(): DB {
  return {
    users: [
      { id: 1, admin: true },
      { id: 2, admin: false },
    ],
    filterUsers(filter) {
      return this.users.filter((user) => filter.call(user));
    },
  };
}

const db = getDB(); //db adalah object bertipe DB
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
console.log(db);
//{
//   users: [ { id: 1, admin: true }, { id: 2, admin: false } ],
//   filterUsers: [Function: filterUsers]
// }
console.log(admins); //[ { id: 1, admin: true } ]
