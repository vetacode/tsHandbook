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
