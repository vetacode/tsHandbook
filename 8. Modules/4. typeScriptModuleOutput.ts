//1. target
//Pilih target berdasarkan runtime paling tua yang harus kamu dukung (browser, Node.js, Electron, dll).
// target: ES5 → aman untuk browser lama
// target: ES2020 → JS modern, sedikit atau tanpa perubahan

//2. module
//Menentukan cara file JS saling berkomunikasi (import/export).

import { valueOfPi } from './constants.js';
export const twoPi = valueOfPi * 2;

//ES2020
import { valueOfPi } from './constants.js';
export const twoPi = valueOfPi * 2;

//CommonJS
('use strict');
Object.defineProperty(exports, '__esModule', { value: true });
exports.twoPi = void 0;
const constants_js_1 = require('./constants.js');
exports.twoPi = constants_js_1.valueOfPi * 2;

//UMD
(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define(['require', 'exports', './constants.js'], factory);
  }
})(function (require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.twoPi = void 0;
  const constants_js_1 = require('./constants.js');
  exports.twoPi = constants_js_1.valueOfPi * 2;
});

//NOTES: ES2020 is effectively the same as the original index.ts.
