//Readonly artinya properti tidak bisa di-reassign setelah objek dibuat.

//1. Readonly pada variable (Readonly<T>)
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

todo.title = 'Hello';
// Error: Cannot assign to 'title' because it is a read-only property.

//2. readonly pada props:
interface Todo {
  readonly title: string;
}

const todo: Todo = { title: 'Learn TS' };

todo.title = 'Learn JS';
// Error juga

//Bedanya 1 vs 2:
// readonly di props → dipakai per property
// Readonly<T> di variable → otomatis membuat SEMUA property readonly

{
  //Readonly<T> dibelakang layar:
  type Readonly<T> = {
    readonly [K in keyof T]: T[K];
  };
}

//Aplikasi readonly pada array dan tuple
const nums: readonly number[] = [1, 2, 3];
nums.push(4);
// Error: Property 'push' does not exist

//ATAU
const nums2: ReadonlyArray<number> = [1, 2, 3];
nums2.push(5);
//Property 'push' does not exist on type 'readonly number[]'.

//Tuple:
const point: readonly [number, number] = [10, 20];
point[0] = 5;
// Cannot assign to '0'

//Hubungan dengan Object.freeze
//Syntax: Object.freeze(obj)
// Membekukan object di runtime
// Tidak bisa diubah (di strict mode akan error)

//solusi:
function freeze<T>(obj: T): Readonly<T> {
  return;
}
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 3000,
};

const frozenConfig = Object.freeze(config);

frozenConfig.timeout = 5000;
// Error: Cannot assign to 'timeout' because it is a read-only property.
//Artinya:
// Object.freeze → runtime protection
// Readonly<T> → compile-time protection

//DEEP READONLY:
type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};
