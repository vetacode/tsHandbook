//public is the default visibility, which the member can be accessed anywhere:
class Greeter {
  public greet() {
    //we can write it for style/readability reasons.
    console.log('Hi!');
  }
}

const g = new Greeter();
g.greet();
