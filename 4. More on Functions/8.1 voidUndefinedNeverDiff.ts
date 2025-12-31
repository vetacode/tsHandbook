//1. Void: caller ga boleh ngandelin return value
function log(msg: string): void {
  console.log(msg);
}

//function boleh return sesuatu secara runtime tapi caller ga boleh pakai hasil return nya:
const x = log('Hello');
x.toString(); //Error: Property 'toString' does not exist on type 'void'.
