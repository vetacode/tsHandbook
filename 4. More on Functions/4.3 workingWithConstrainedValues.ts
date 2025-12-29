function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
    // Type '{ length: number; }' is not assignable to type 'Type'.
    //   '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
  }
}

//Penting:
// Type bukan { length: number },
// tapi tipe spesifik apa pun yang memenuhi syarat itu.

console.log(minimumLength('hello', 10)); //{ length: 10 }

const arr = minimumLength([1, 2, 3], 6);
console.log(arr); //{ length: 6 }
// console.log(arr.slice(0)); // TypeError: arr.slice is not a function

//solution
interface P {
  length: number;
}

function minLength<T extends P>(obj: T, minimum: number): T | P {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}

console.log(minLength('hello', 10)); //{ length: 10 }

const arr2 = minLength([1, 2, 3], 6);
console.log(arr2); //{ length: 6 }
// console.log(arr2.slice(0));
