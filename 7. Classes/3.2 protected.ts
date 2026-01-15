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

//Exposure of protected members
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15; // -> subclass/derived class bisa milih untuk mengexpose property Base class ke public atau keep it protected
}
const d = new Derived();
console.log(d.m); // OK -> coz Derived membuka akses ke public

{
  //Cross-hierarchy protected access
  class Base {
    protected x: number = 1;
    //Artinya:
    // x adlh milik Base
    // x bisa diakses di Base dan class yg extends Base
  }

  class Derived1 extends Base {
    protected x: number = 5; //overriding x dari Base -> skrg x ini milik Derived1, bukan milik Base lagi
  }
  class Derived2 extends Base {
    f1(other: Derived2) {
      other.x = 10; // Aman: Derived2 boleh mengakses protected x pada sesama instance Derived2
    }
    f2(other: Derived1) {
      other.x = 10;
      //    ^ Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
      //Error coz Derived2 adalah sibling Derived1, so ga boleh akses protected property milik sibling (Derived1)
    }
  }
}
