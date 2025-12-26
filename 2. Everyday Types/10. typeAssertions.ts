//DISEBUT JUGA TYPE CASTING

// 1. Kadang kita punya pengetahuan tambahan tentang tipe suatu nilai, tapi TypeScript tidak bisa mengetahuinya secara otomatis.

// contoh:
// <canvas id="game"></canvas>
// const el = document.getElementById("game");

// TypeScript ga tau klo game adalah CanvasCaptureMediaStreamTrack, tapi hanya tau:

// getElementById(elementId: string): HTMLElement | null;

// karena hanya melihat API getElementById

// akibatnya:
// const canvas = document.getElementById("game");
// canvas.getContext("2d"); Error: Property 'getContext' does not exist on type 'HTMLElement'.
// - getContext hanya ada di HTMLCanvasElement
// - HTMLElement tidak menjamin punya method itu

// Tapi kita lebih tahu klo #game adalah <canvas>

// Solusi: pake Type Assertion (memberi tahu TypeScript):

// const canvas = document.getElementById("game") as HTMLCanvasElement;
// atau (sama aja):
// const canvas = <HTMLCanvasElement>document.getElementById("game");

// TAPI ini msh beresiko klo ternyata bukan <canvas>
// misal ternyata isinya div:
// <div id="game"></div>
// hasilnya compile time ga error, tapi pas runtime akan error:
// canvas.getContext is not a function

// JADI: Pakai type assertion ketika kita benar-benar yakin.

// SOLUSI cara aman: Pakai Generic querySelector:
// const canvas = document.querySelector<HTMLCanvasElement>("#game");
// canvas?.getContext("2d");

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas');

// NOTES: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions.
// This will results Error:
const x = 'hello' as number; //impossible coercion
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:
declare const expr: any;
type T = { a: 1; b: 2; c: 3 };
// ---cut---

//syntax: value as any as TargetType
const a = expr as any as T; //double type assertion
// menghasilkan type a = T (const a: T)
