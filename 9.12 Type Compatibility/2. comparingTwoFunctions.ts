let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error

let items = [1, 2, 3];
// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));
// Should be OK!
items.forEach((item) => console.log(item));

let x = () => ({ name: 'Alice' });
let y = () => ({ name: 'Alice', location: 'Seattle' });
x = y; // OK
y = x; // Error, because x() lacks a location property

//Function Parameter Bivariance
enum EventType {
  Mouse,
  Keyboard,
}
interface Event {
  timestamp: number;
}
interface MyMouseEvent extends Event {
  x: number;
  y: number;
}
interface MyKeyEvent extends Event {
  keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + ',' + e.y));
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) =>
  console.log((e as MyMouseEvent).x + ',' + (e as MyMouseEvent).y),
);
listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
  console.log(e.x + ',' + e.y)) as (e: Event) => void);
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));

//Optional Parameters and Rest Parameters
function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
