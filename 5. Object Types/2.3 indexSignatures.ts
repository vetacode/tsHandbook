//Index signature dipakai ketika kita tidak tahu nama property secara pasti, tapi tahu pola key dan value.
//Syntax:
interface Dict {
  [key: string]: number; //artinya-> key: string, value: number, berlaku untuk semua property string
}

//obj.property is also available as obj["property"]

////////
declare function getStringArray(): StringArray;
// ---cut---
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
//        ^const secondItem: string ( | undefined -> if noUncheckedInexedAccess: true)

//
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
  //    ^'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
  [x: string]: Dog;
}

//NOTES: aturan fundamental index signature:
//Tipe value index number HARUS subtype dari tipe value index string -> Dog adlh subtype dari Animal
//Coz Dog ⊆ Animal

//Yg betul:
interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}
interface Okay2 {
  [x: number]: Dog;
  [x: string]: Dog;
}

//NOTES:
// obj[1] === obj["1"]
//Semua number index akan dikonversi ke string, Jadi index number adalah subset dari index string

//RULES:
// [string]: S
// [number]: Na
// N must be assignable to S
// number-index-value ⊆ string-index-value

//example name’s type does not match the string index’s type
interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  name: string;
  // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

//props of different types are acceptable if the index signature is a union of the props types:

interface NumberOrStringDict {
  [index: string]: number | string;
  length: number;
  name: string;
}

//we can make index signatures readonly in order to prevent assignment to their indices:

declare function getReadOnlyStringArray(): ReadonlyStringArray;
// ---cut---
// @errors: 2542
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = getReadOnlyStringArray();
myArray2[2] = 'Angel';
//Error: Index signature in type 'ReadonlyStringArray' only permits reading.
