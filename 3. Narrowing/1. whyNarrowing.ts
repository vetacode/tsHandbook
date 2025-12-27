function padLeft(padding: number | string, input: string): string {
  return ' '.repeat(padding) + input;
  // Argument of type 'string | number' is not assignable to parameter of type 'number'.
  //   Type 'string' is not assignable to type 'number'.
}

//ga bisa assign/terapin argument dg type 'string | number' ke parameter dg type 'number'

//solusi: narrowing => type disaring => hanya boleh masuk type number only
function padLeft2(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}
