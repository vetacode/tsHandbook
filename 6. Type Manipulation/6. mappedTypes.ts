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
}
