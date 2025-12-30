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
