// Kalau Exclude itu membuang (buang yang sama),
// maka Extract itu memilih yang cocok saja (ambil yang sama)

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
type T0 = 'a';

type T1 = Extract<string | number | (() => void), Function>;
type T1 = () => void;

//Aplikasi: discriminated union
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number };
//Ini disebut Discriminated Union -> kunci pembeda: kind

type T2 = Extract<Shape, { kind: 'circle' }>;
//hasil:
type T2 = {
  kind: 'circle';
  radius: number;
};

//Yang terjadi di belakang layar:
export type Extract<T, U> = T extends U ? T : never;
