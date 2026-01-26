//Parameters<T> → ambil parameter function
// ConstructorParameters<T> → ambil parameter constructor class / constructor function

//Type HARUS bertipe constructor:
new (...args: any[]) => any

//Yg terjadi di balik layar:
export type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

//Artinya:
// Kalau T punya constructor
// Ambil parameter constructor (infer P)
// Jadikan tuple

//APLKASI real use case: generic factory function
function createInstance<
  T extends new (...args: any) => any
>(
  Class: T,
  ...args: ConstructorParameters<T>
): InstanceType<T> {
  return new Class(...args);
}

class User {
  constructor(public name: string, public age: number) {}
}

const user = createInstance(User, "Andi", 25);
// createInstance(User, 25, "Andi") → error
