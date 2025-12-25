//1. The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Using type aliases
type Point = {
  x: number;
  y: number;
};

function printCoordAliases(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordAliases({ x: 100, y: 100 });

//a type alias can name a union type
type ID = number | string;

// When you use the alias, it’s exactly as if you had written the aliased type. both types are aliases for the same type:
declare function getInput(): string;
declare function sanitize(str: string): string;
// ---cut---
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = 'new input';

// Kesimpulan:
// 🔴 Type alias tidak membuat “secure type”
// 🔴 Type alias tidak mencegah reassignment
// 🔴 Type alias hanya membantu dokumentasi & readability

// Alias hanya:
// Membantu developer membaca maksud kode
// Memberi hint semantik, bukan proteksi
