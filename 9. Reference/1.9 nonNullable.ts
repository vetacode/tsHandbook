//Syntax: NonNullable<Type>
//Membentuk type baru dengan mengecualikan null dan undefined dari Type.

//PROBLEM:
//null dan undefined bukan bagian otomatis dari type lain

//Tapi sering muncul di:
// response API
// optional value
// hasil query / lookup
// data async

//SOLUSI -> NonNullable membantu saat:
// kita sudah melakukan validasi
// atau ingin memastikan type aman dipakai tanpa cek null lagi

//Cara kerja diblkg layar:
type NonNullable<T> = T extends null | undefined ? never : T;
//Jka T adalah null atau undefined -> dibuang (never)
//selain itu pertahankan

//Contoh1:
type T0 = NonNullable<string | number | undefined>;
//hasil:
type T0 = string | number;

//Contoh2:
type T1 = NonNullable<string[] | null | undefined>;
//hasil:
type T1 = string[];

//Aplikasi 1: dengan function
function getUser(): string | null {
  return Math.random() > 0.5 ? 'Budi' : null;
}

type User = NonNullable<ReturnType<typeof getUser>>;
// type User = string

//Aplikasi 2: setelah validasi runtime
function assertNotNull<T>(value: T): NonNullable<T> {
  if (value == null) {
    throw new Error('Value is null or undefined');
  }
  return value as NonNullable<T>;
}

const name2: string | null = 'Andi';
//ini msh possible null, jd ga bs (seharusnya):
name2.toUpperCase(); // -> kenapa tidak error? Ini Disebut: Control Flow Analysis / Narrowing
// const name2: string

const safeName = assertNotNull(name);
// safeName: string

//Aplikasi 3: kombinasi dgn optional props
type User2 = {
  id: number;
  email?: string | null;
};

type Email = NonNullable<User2['email']>;
// type Email = string
