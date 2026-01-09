//indexed access type is used to look up a specific property on another type:
type Laki = {
  name: string;
  age: number;
  alive: boolean;
};

type Age = Laki['age'];
//    ^ type Age = number

//indexing type is itself a type, so we can use unions, keyof, or other types entirely:
type NameOrAlive = Laki['name' | 'alive'];
//      ^ type NameOrAlive = string | boolean

type LakiType = Laki[keyof Laki];
//      ^ type LakiType = string | number | boolean

type NameOrAge = 'name' | 'age';
type Mixed = Laki[NameOrAge];
//     ^ type Mixed = string | number

type I1 = Laki['alve'];
//    ^ Property 'alve' does not exist on type 'Laki'.

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = (typeof MyArray)[number];
//     ^ type Person = {
//         name: string;
//         age: number;
//      }

//(typeof MyArray) artinya: ambil tipe dari variabel MyArray
// -> type MyArrayType = {
//        name: string;
//        age: number;
//      }[];

//[number] artinya: masuk dan ambil tipe 'satu elemen' di dalam array ini (Array di TypeScript diakses pakai index -> index type nya adalah number)

//Tanpa[number]:
type Person2 = typeof MyArray;
//     ^ Person = array, bukan object
//NOTES:
// T[] -> array
// T[number] -> isi array

type Umur = (typeof MyArray)[number]['age'];
//    ^ type Umur = number
type Umur3 = (typeof MyArray)[number]['name'];
//    ^ type Umur3 = string

//OR
type Umur2 = Laki['age'];
//     ^ type Umur2 = number
