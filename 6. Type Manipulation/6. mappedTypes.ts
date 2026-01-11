{
  type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse;
  };

  const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
  };

  //MAPPED TYPE adalah generic type yang:
  // - Mengambil kumpulan key (biasanya dari keyof)
  // - Mengulang (iterate) setiap key tsb
  // - Membentuk type baru berdasarkan keys tsb

  //Pola syntax:
  type Mapper<T> = {
    [K in keyof T]: NewType;
  };

  //T -> type input
  //keyof T -> union key of props
  //K in .. -> loop key
  //NewType -> value baru

  //mental model di js:
  // keyof Type === daftar nama properti
  // mapped type === loop for di level type

  type OptionsFlags<T> = {
    [Props in keyof T]: boolean;
  };
  // keyof T -> menghasilkan union semua props name
  // [Props in keyof T] -> untuk setiap property di T ....
  // : boolean -> ubah value nya jadi boolean
  // Nama Props bebas, bisa diganti K/Key/dsb

  //Contoh usage:
  type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  // keyof Features -> darkMode | newUserProfile

  type FeatureOptions = OptionsFlags<Features>;
  //          ^ type FeatureOptions = {
  //                    darkMode: boolean;
  //                    newUserProfile: boolean;
  //             }

  //Usage untuk di project feature toggle:
  const features: FeatureOptions = {
    darkMode: true,
    newUserProfile: false,
  };

  //Aplikasi di Konfigurasi:
  type ReadOnlyConfig<T> = {
    [K in keyof T]: boolean;
  };

  //Aplikasi di Validasi:
  type ValidationState<T> = {
    [K in keyof T]: boolean;
  };
}

{
  //1. MAPPING MODIFIERS
  //additional modifiers which can be applied during mapping:
  // -> 'readonly' and '?' -> affect mutability and optionality respectively.
  // remove or add these modifiers by prefixing with - or +.
  // If don’t add a prefix, then + is assumed

  // Removes 'readonly' attributes from a type's properties
  type CreateMutable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };

  type UnlockedAccount = CreateMutable<LockedAccount>;
  //          ^ type UnlockedAccount = {
  //                 id: string;
  //                 name: string;
  //            };

  // Removes 'optional' attributes from a type's properties
  type Concrete<T> = {
    [P in keyof T]-?: T[P];
  };

  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };

  type User = Concrete<MaybeUser>;
  // type User = {
  //     id: string;
  //     name: string;
  //     age: number;
  // }

  //2. KEY REMAPPING VIA AS

  //SYNTAX:
  type MappedTypeWithNewProperties<T> = {
    [P in keyof T as NewKeyType]: T[P];
  };
  // Usage:
  //a. to create new props names:
  type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
  };

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type LazyPerson = Getters<Person>;
  //        ^ type LazyPerson = {
  //              getName: () => string;
  //              getAge: () => number;
  //              getLocation: () => string;
  //          }

  //b. filter out keys, by producing never via conditional type
  //Remove the 'tulisan' props:
  type RemoveField<T> = {
    [P in keyof T as Exclude<P, 'tulisan'>]: T[P];
  };

  interface Group {
    tulisan: string;
    nomor: number;
  }

  type NoTulisan = RemoveField<Group>;
  //      ^ type NoTulisan = {
  //            nomor: number;
  //        }

  //c. map over abritary unions of any type

  type EventConfig<T extends { kind: string }> = {
    [P in T as P['kind']]: (event: P) => void;
  };

  // P in T -> bertujuan untuk memetakan member union T, so ga pake 'keyof'

  type SquareEvent = { kind: 'square'; x: number; y: number };
  type CircleEvent = { kind: 'circle'; radius: number };

  type Events = SquareEvent | CircleEvent;
  type Config = EventConfig<Events>;
  // type Config = {
  //     square: (event: SquareEvent) => void;
  //     circle: (event: CircleEvent) => void;
  // }
}

//3. FURTHER EXPLORTAION
