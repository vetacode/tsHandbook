// TypeScript Specific ES Module Syntax
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

// @filename: app.ts
import { Cat, Dog } from './animal.js';
type Animals = Cat | Dog;

//'import type' cannot used as value
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => 'fluffy';

// @filename: valid.ts
import type { Cat, Dog } from './animal.js';
export type Animals = Cat | Dog;

// @filename: app.ts
import type { createCatName } from './animal.js';
const name = createCatName();
//                ^ 'createCatName' cannot be used as a value because it was imported using 'import type'.

//'Inline type imports'
//TypeScript 4.5 also allows for individual imports to be prefixed with type to indicate that the imported reference is a type:
// @filename: app.ts
import { createCatName, type Cat, type Dog } from './animal.js';

export type Animals = Cat | Dog;
const name = createCatName();
