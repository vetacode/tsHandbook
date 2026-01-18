//It can inherit from base classes.

//1. IMPLEMENTS Clauses
// -> to check that a class satisfies a particular interface:

//2. EXTENDS clauses
// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and can also define additional members.

// | Aspek                      | `implements`                                   | `extends`                      |
// | -------------------------- | ---------------------------------------------- | ------------------------------ |
// | Tujuan utama               | **Mengecek kesesuaian** class dengan interface | **Mewarisi** class lain        |
// | Hubungan                   | Class ↔ Interface                              | Class ↔ Class                  |
// | Menyalin properti/method   |  Tidak                                         |  Ya                           |
// | Menambah properti ke class |  Tidak                                         |  Ya (dari base class)         |
// | Mengubah tipe class        |  Tidak                                         |  Ya (subtype dari base class) |
// | Implementasi method        | **Wajib ditulis sendiri**                      | Bisa langsung dipakai          |
// | Optional property (`?`)    |  Tidak otomatis ada                            |  Ikut diwarisi                |
// | Runtime effect (JS)        |  Tidak ada                                     |  Ada                          |
// | Bisa lebih dari satu       |  Ya (`implements A, B`)                        |  Tidak (hanya satu class)     |
// | Fungsi utama               | **Type checking / kontrak**                    | **Code reuse / inheritance**   |

//NOTES:
// implements = cek kontrak (type-level only)
// extends = warisan perilaku & data (runtime + type-level)
