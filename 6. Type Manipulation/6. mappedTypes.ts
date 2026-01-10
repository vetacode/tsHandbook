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
}
