//First steps
// Let’s start with the program we’ll be using as our example throughout this page. We’ve written a small set of simplistic string validators, as you might write to check a user’s input on a form in a webpage or check the format of an externally-provided data file.

interface StringValidator {
  isAcceptable(s: string): boolean;
}
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
// Some samples to try
let strings = ['Hello', '98052', '101'];
// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'.`);
  }
}

//Namespaced Validators
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
// Some samples to try
let strings2 = ['Hello', '98052', '101'];
// Validators to use
let validators2: { [s: string]: Validation.StringValidator } = {};
validators2['ZIP code'] = new Validation.ZipCodeValidator();
validators2['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings2) {
  for (let name in validators2) {
    console.log(
      `"${s}" - ${
        validators2[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`,
    );
  }
}

