//It can inherit from base classes.

//1. implements Clauses
// -> to check that a class satisfies a particular interface:

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}
//Yg TS lakukan adlh nge-cek:
// Apakah class Sonar punya method ping()? yes -> aman
// Apakah return type-nya cocok (void)? yes -> aman

//contoh error:
class Ball implements Pingable {
  // Class 'Ball' incorrectly implements interface 'Pingable'.
  //   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log('pong!');
  }

  // ping() {
  //   console.log('ping');
  // }
}
//Error krn:
// interface minta ping() -> tp class ga punya ping()

//Kesalahan umum: implements mengubah type parameter
interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s) {
    // Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowerCase() === 'ok';

    // s: any -> coz implements interface ga passing/mengubah type ke class
  }
}

//Solusi: tulis manual type di class
class NameChecker2 implements Checkable {
  check(s: string) {
    return s.toLocaleLowerCase() === 'ok';
  }
}
//interface hanya ngecek kecocokan, ga ngerubah apapun
//Artinya: implements hanya ngecek: Apakah check() PUNYA parameter string dan return boolean?

//Optional Props tidak otomatis dibuat
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
// Property 'y' does not exist on type 'C'.
//implements tidak otomatis menambahkan properti 'y'
