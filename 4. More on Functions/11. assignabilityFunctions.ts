type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

//the return value of one of these functions is assigned to another variable, it will retain the type of void
const v1 = f1(); //const v1: void
const v2 = f2();
const v3 = f3();

//Array.prototype.push returns a number and the Array.prototype.forEach method expects a function with a return type of void, and its normal:
//coz void means return value diabaikan, bukan “tidak boleh return”
const src = [1, 2, 3];
const dst = [0];
console.log(dst.push(...src)); //4
console.log(src.forEach((el) => dst.push(el))); //undefined
console.log(dst.push(...src)); //10
console.log(
  src.forEach((el) => {
    return dst.push(el);
  })
);
console.log(dst.push(...src)); //16

//when a literal function definition has a void return type, that function must not return anything.
function f4(): void {
  return true; // Error: Type 'boolean' is not assignable to type 'void'.
}

const f5 = function (): void {
  // @ts-expect-error
  return true; //ts not screaming coz above annotation
};

//di TypeScript, explicit void annotation -> dilarang return value.
// void berarti “nilai return-nya tidak boleh digunakan” / di ignored.

//Kasus dimana VOID boleh retrun value:
// pada Contextual void:

const func: () => void = () => {
  return true; //Aman, ga error, coz:
  //void berasal dari context type
  // TS mengartikan: nilai return akan diabaikan
};

//Bedah bertahap:
//const func: () => void
//Artinya: “Saya butuh sebuah function yang jika dipanggil, hasilnya TIDAK BOLEH digunakan.”

// = () => { return true; }
// ini adalah implementasi dari func tsb yg mengembalikan nilai true, yg akan diabaikan
