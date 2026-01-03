//Excess Property Checks adalah pengecekan tambahan yang dilakukan TypeScript khusus untuk object literal, untuk mendeteksi properti yang tidak dikenal oleh target type.

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20,
  };
}

//Object literal → dicek ketat
let mySquare = createSquare({ colour: 'blue', width: 100 });
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

//Variable biasa → tidak dicek ketat
const config = { colour: 'blue', width: 100 };
console.log(createSquare(config)); //{ color: 'red', area: 10000 } -> OK
