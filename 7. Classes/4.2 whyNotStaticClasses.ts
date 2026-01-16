//we don’t need a “static class” syntax in TypeScript because a regular object (or even top-level function) will do the job just as well:
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() {}

// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};
