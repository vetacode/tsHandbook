class C {
  _length = 0;
  //Properti internal (konvensi: _ artinya private by convention)
  // Dipakai untuk menyimpan nilai sebenarnya

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

//TypeScript has some special inference rules for accessors:
// If get exists but no set, the property is automatically readonly
// If the type of the setter parameter is not specified, it is inferred from the return type of the getter

class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

//NOTES:
//1. Jika ada getter tapi TIDAK ada setter → properti jadi readonly
class A {
  private _x = 10;

  get x() {
    return this._x;
  }
}

const a = new A();
a.x = 12;
//^ Cannot assign to 'x' because it is a read-only property.

//2. Jika tipe parameter setter tidak ditulis, TypeScript akan menginfer dari return type getter

class B {
  _value = 0;

  get value(): number {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }
}

const b = new B();
b.value = 'z'; //Error: Type 'string' is not assignable to type 'number'.
b.value = 10; //OK -> B.value: number

{
  class Thing {
    _size = 0;

    get size(): number {
      return this._size;
    }

    set size(value: string | number | boolean) {
      let num = Number(value);
      //konvert semua input ke number
      //'42' -> 42, true -> 1, 'abc' -> NaN

      if (!Number.isFinite(num)) {
        this._size = 0;
        return;
      }
    }
  }

  const t = new Thing();
  const x = t.size; //const x: number
}
