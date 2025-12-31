//1. VOID: caller ga boleh ngandelin return value
function log(msg: string): void {
  console.log(msg);
}

//function boleh return sesuatu secara runtime tapi caller ga boleh pakai hasil return nya:
const x = log('Hello');
x.toString(); //Error: Property 'toString' does not exist on type 'void'.

//Edge case: callback void
const cb: () => void = () => {
  return 'Hello'; //OK, no Error
  //Caller mengabaikan hasil
  //return value ga dianggap bagian dari kontrak
};

//Edge case: void type return undefined
function f(): void {
  return undefined; // OK, no Error
  //undefined adalah absence of value
  //Masih sesuai kontrak void
}

//2. UNDEFINED: function secara explisit mengembalikan undefined
function getNothing(): undefined {
  return undefined; //Wajib return undefined
  //return; // Error -> coz walaupun return; === return undefined; saat runtime, tapi TS menganggap ini ga explisit -> Error
}
