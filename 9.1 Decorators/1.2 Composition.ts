@f
@g
x

//OR
@f @g x

//TS proceed:
f(g(x))
//Artinya:
// yang paling dekat ke x dieksekusi dulu
// tapi yang paling atas “membungkus” hasil akhirnya

//Alur Eksekusi
//Fase A — Factory evaluation -> decorator ini dibuat
@first()
@second()

//yg dieksekusi
first()
second()
//Urutannya: atas → bawah

//Fase B — Decorator execution -> Decorator ini dipanggil ke target
second(...)   // duluan
first(...)    // belakangan
//Urutannya: bawah → atas

{
function first() {
  console.log("first(): factory evaluated");
  return function (target, propertyKey, descriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target, propertyKey, descriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
}

//EVALUATION (atas ke bawah):
// first()   ← bikin decorator
// second()

// EXECUTION (bawah ke atas):
// second(method)
// first(result_of_second)


// | Tahap               | Urutan          |
// | ------------------- | --------------- |
// | Factory dievaluasi  | ⬇️ atas → bawah |
// | Decorator dipanggil | ⬆️ bawah → atas |
// | Model mental        | `f(g(x))`       |
