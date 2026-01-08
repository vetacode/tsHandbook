//TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:
let s = 'hello';
let n: typeof s;
//  ^ let n: string;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
//   ^ type K = boolean
