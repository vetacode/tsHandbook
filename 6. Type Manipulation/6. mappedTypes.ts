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
}
