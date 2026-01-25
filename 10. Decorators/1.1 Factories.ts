//PROBLEM
@color('red')
class Button {}
//Decorator itu harus bentuk function, ga bs ditulis pake parameter lgsg sperti ini: color('red')

//SOLUSI: decorator factory -> fungsi yang MENGEMBALIKAN decorator -> supaya bs pake parameter
function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}

{
  //Alur proses eksekusi nya:
  function color(value: string) {
    console.log('factory dipanggil:', value);

    return function (target) {
      console.log('decorator dipanggil untuk:', target.name);
    };
  }

  @color('red')
  class Button {}

  //Hasil:
  // factory dipanggil: red
  // decorator dipanggil untuk: Button
}

//APLIKASI real project:
//1. Logging
@log
method() {}

//2. Validation
@required
name: string;

//3. Framework (NestJS/Angular)
@Controller("users")
class UserController {}

@Get(":id")
getUser() {}



// | Konsep            | Artinya                             |
// | ----------------- | ----------------------------------- |
// | Decorator         | Fungsi yang ditempel pakai `@`      |
// | `target`          | Yang ditempeli decorator            |
// | Decorator Factory | Fungsi yang mengembalikan decorator |
// | Kenapa factory?   | Supaya bisa pakai parameter         |
