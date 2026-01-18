{
  //Contoh tanpa this-based type guard
  class FileSystemObject {
    path!: string;
  }

  function getSomething(): FileSystemObject {
    return new FileSystemObject();
  }

  const fso: FileSystemObject = getSomething();

  fso;
}

//SYNTAX: methodName(): this is SomeType
//Artinya: Jika method ini mengembalikan true, maka this boleh dianggap sebagai SomeType

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  //Artinya: Jika isFile() → true, maka type 'this' pasti FileRep
  //Klo pake 'isFile(): boolean' biasa, TS hanya tau return true/false, tapi ga tau klo true, type nya apa?..

  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  //Artinya: Jika isNetworked() -> true, maka:
  // object ini tetap FileSystemObject
  // dan juga punya properti host

  constructor(
    public path: string,
    private networked: boolean
  ) {}
}

class FileRep extends FileSystemObject {
  constructor(
    path: string,
    public content: string
  ) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children!: FileSystemObject[];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo');

if (fso.isFile()) {
  fso.content;
  // const fso: FileRep
} else if (fso.isDirectory()) {
  fso.children;
  // const fso: Directory;
} else if (fso.isNetworked()) {
  fso.host;
  // const fso: Networked & FileSystemObject
}

//Contoh lain lebih sederhana
class Box<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const box = new Box<string>();
box.value = 'Gameboy';

box.value;
// (property) Box<string>.value?: string

if (box.hasValue()) {
  box.value;
  // (property) value: string
}

//Pakai this-based type guard jika:
// Validasi state internal object
// OOP style API
// Lazy validation (cek dulu, baru pakai)

//Jangan pakai jika:
// Validasi object lain
// Logic tidak menjamin kebenaran tipe

// NOTES:
// this-based type guard adalah cara object “meyakinkan” TypeScript bahwa dirinya sekarang aman diperlakukan sebagai tipe tertentu.
