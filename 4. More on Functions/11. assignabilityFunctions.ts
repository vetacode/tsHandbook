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
  // @ts-expect-error
  return true;
}

const f5 = function (): void {
  // @ts-expect-error
  return true;
};
