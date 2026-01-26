//Syntax:
//Record<Keys, Type>
// Keys → tipe untuk nama property (key)
// Type → tipe untuk isi / value dari setiap property
//  Semua key WAJIB ada, dan Semua value HARUS bertipe sama

//contoh kita punya daftar nama kucing dengan struktur data yg sama:
// | Nama Kucing | age | breed             |
// | ----------- | --- | ----------------- |
// | miffy       | 10  | Persian           |
// | boris       | 5   | Maine Coon        |
// | mordred     | 16  | British Shorthair |

//1. Buat union untuk Key
type CatName = 'miffy' | 'boris' | 'mordred';
//Artinya: Object hanya boleh punya key: "miffy", "boris dan "mordred"
//ga boleh key lain dan ga boleh kurang & lebih

//2. Definisikan type value
interface CatInfo {
  age: number;
  breed: string;
}

//3. Gabungkan pakai Record
const cats: Record<CatName, CatInfo> = {
  //cats adalah object, yang punya key CatName dan punya value CatInfo
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British shorhair' },
};

{
  //Record dibalik layar:
  type Record<K extends PropertyKey, T> = {
    [P in K]: T;
  };
}

//Gunakan Record kalo:
// Key sudah diketahui & terbatas
// Semua value punya struktur yang sama
// Ingin type safety penuh
