class Greeter {
  public greet() {
    console.log('Hello, ' + this.getName());
  }

  protected getName() {
    return 'hi';
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    console.log('Howdy, ' + this.getName()); //Aman, protected bisa diakses dari subclass
  }
}
const g = new SpecialGreeter();

g.greet();
g.getName();
//Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
