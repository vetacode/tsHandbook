type SomeObject = any;
// ---cut---
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

//combine call and construct signatures in the same type
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

function func(ctor: CallOrConstruct) {
  // Passing an argument of type `number` to `ctor` matches it against
  // the first definition in the `CallOrConstruct` interface.
  console.log(ctor(10));
  // ^(parameter) ctor: CallOrConstruct
  // (n?: number | undefined) => string

  // Similarly, passing an argument of type `string` to `ctor` matches it
  // against the second definition in the `CallOrConstruct` interface.
  console.log(new ctor('10'));
  // ^(parameter) ctor: CallOrConstruct
  // new (s: string) => Date
}

func(Date);
