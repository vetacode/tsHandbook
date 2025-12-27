//Falsy value (HANYA INI):
// false
// -0
// 0
// NaN
// "" (the empty string)
// 0n (the bigint version of zero)
// null
// undefined
//lainnya adalah truthy value
// i.e.:

!''; //nilai cabang lainnya selalu falsy/unreachable, karena nilai runtime nya adalah true

if (!'') {
  //This kind of expression is always falsy.
  //akan selalu dieksekusi, krn !('') === true
  console.log('Always Executed!!');
}

console.log(!'' === true); //true

//Truthy value
// both of these result in 'true'
Boolean('hello'); // type: boolean, value: true
!!'world'; // type: true,    value: true
// This kind of expression is always truthy.

//guarding from null and undefined
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    //jk strs null & undefined => falsy, berarti type strs === string => lgsg ke else if
    //jk strs sting[] => true => type of strs === object => jalankan code if
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
}

//negating values
//! filter out from negated branches.
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    //jika values undefined, lgsg keluar return undefined, jika values number[] => jalankan else
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
