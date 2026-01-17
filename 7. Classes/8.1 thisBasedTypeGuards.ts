class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
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
  children: FileSystemObject[];
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
