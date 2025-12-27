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
