//Basicnya, di class kita declare property lalu assign nilai nya di constructor
//TypeScript menyediakan shortcut supaya dua langkah itu digabung jadi satu, yaitu parameter properties.
//Parameter properties cuma syntax sugar di TypeScript, bukan fitur runtime

//Caranya:
// Tambahkan modifier (public, private, protected, readonly) langsung di parameter constructor.

//Tanpa parameter properties:
class Params1 {
  public readonly x: number;
  protected y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

//Dengan Parameter properties
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);
// (property) Params.x: number

console.log(a.z);
//            ^ Property 'z' is private and only accessible within class 'Params'.

console.log(a.y);
//            ^ Property 'y' is protected and only accessible within class 'Params' and its subclasses.
