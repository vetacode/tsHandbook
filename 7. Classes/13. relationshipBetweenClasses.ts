class Kelas1 {
  x = 0;
  y = 1;
}

class Kelas2 {
  x = 0;
  y = 1;
}

const a: Kelas1 = new Kelas2(); //Aman

class Person {
  name!: string;
  age!: number;
}

class Employee {
  name!: string;
  age!: number;
  salary!: string;
}

const andi: Person = new Employee(); //Aman
const p: Employee = new Person();
//    ^ Property 'salary' is missing in type 'Person' but required in type 'Employee'.
