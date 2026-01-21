//Exclude Menghasilkan type baru dengan menghilangkan semua anggota union yang assignable ke ExcludedMembers.
// Kuncinya: Union; Assignable, bukan equality (===)

//Exclude dibalik layar:
export type Exclude<T, U> = T extends U ? never : T;
// T extends U ? ... : ... bersifat distributive jika T adalah union
// Artinya setiap anggota union dicek satu per satu

//Contoh1:
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
//Distribusi:
// "a" extends "a" ? never : "a"   // never
// "b" extends "a" ? never : "b"   // "b"
// "c" extends "a" ? never : "c"   // "c"

//hasil:
type T0 = 'b' | 'c';

//Contoh2:
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

//hasil:
type T1 = 'c';

//Contoh3:
type T2 = Exclude<string | number | (() => void), Function>;
//hasil:
type T2 = string | number;

//Aplikasi:
//1. Filtering Union
type Events = 'click' | 'hover' | 'scroll';
type UIEvents = Exclude<Events, 'scroll'>;
//2. Remove function types
type NonFunction<T> = Exclude<T, Function>;
//3. Discriminated union narrowing
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number };

type NonCircle = Exclude<Shape, { kind: 'circle' }>;

//EDGE CASE: Assignable

type T = Exclude<{ a: number; b: string }, { a: number }>;
//Pahami ini bukan Union, tapi 'satu object type'

//Assignabile:
// { a: number; b: string } extends { a: number } -> true

//hasil:
type T = never;
