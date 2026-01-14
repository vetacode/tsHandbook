//Biasanya pakai index signature di object:
type Flags = {
  [key: string]: boolean;
};

const f: Flags = {
  darkMode: true,
};

//Classes can declare index signatures; these work the same as Index Signatures for other object types:
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

const myClass = new MyClass();
myClass['x'] = true; //aman, ga error
myClass['y'] = false; //aman, ga error
myClass['check'] = () => true; //aman
myClass['check'] = true; //Error, hrs function

//Because the index signature type needs to also capture the types of methods, it’s not easy to usefully use these types. Generally it’s better to store indexed data in another place instead of on the class instance itself.

//SOLUSI: pisahkan data indexed ke property khusus:
class MyClass2 {
  private flags: Record<string, boolean> = {};

  check(s: string) {
    return this.flags[s];
  }

  set(s: string, value: boolean) {
    this.flags[s] = value;
  }
}
