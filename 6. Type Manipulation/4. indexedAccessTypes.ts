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
