window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);
  console.log(mouseEvent.kangaroo);
// Property 'kangaroo' does not exist on type 'MouseEvent'.
// };


// Declares there is a global variable called 'window'
declare var window: Window & typeof globalThis;
// Which is declared as (simplified):
interface Window extends GlobalEventHandlers {
  // ...
}
// Which defines a lot of known handler events
interface GlobalEventHandlers {
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  // ...
}

window.onscroll = function (uiEvent) {
  console.log(uiEvent.button);
// Property 'button' does not exist on type 'Event'.
};

const handler = function (uiEvent) {
  console.log(uiEvent.button); // <- OK
};

window.onscroll = function (uiEvent: any) {
  console.log(uiEvent.button); // <- Now, no error is given
};

function createZoo(): Animal[] {
  return [new Rhino(), new Elephant(), new Snake()];
}