//1. Awaited<Type>
// itu tipe helper di TypeScript yang meniru perilaku await di JavaScript

//2. Partial<Type>
//utility type untuk mengubah semua properti dalam suatu type menjadi optional (?)

//3. Required<Type>
//utility type yang fungsinya mengubah semua properti opsional (?) menjadi wajib (required).

//4. Readonly<Type>
//Mengubah semua properti di dalam suatu type menjadi readonly

//5. Record<Keys, Type>
//membuat type object dengan key tertentu dan value dengan type yang sama

//6. Pick<Type, Keys>
//membuat type baru dengan mengambil (memilih) properti tertentu saja dari sebuah type/interface lain.

//7. Omit<Type, Keys>
//digunakan untuk membuat type baru dari sebuah type, dengan menghapus properti tertentu.

//8. Exclude<UnionType, ExcludedMembers>
//menghapus anggota tertentu dari sebuah union type.

//9. Extract<Type, Union>
//mengambil (menyaring) dari Type hanya member union yang cocok / assignable ke Union

//10. NonNullable<Type>
//menghapus null dan undefined dari suatu union type

//11. Parameters<Type>
//mengambil tipe parameter dari sebuah function, lalu mengubahnya jadi tuple

//12. ConstructorParameters<Type>
//mengambil tipe parameter dari sebuah constructor (new), lalu mengubahnya menjadi tuple type.

//13. ReturnType<Type>
//mengambil tipe hasil return dari sebuah function

//14. InstanceType<Type>
//mengambil tipe hasil objek yang dihasilkan oleh constructor (new)

//15. NoInfer<Type>
//jangan pakai tipe ini sebagai sumber inferensi

//16. ThisParameterType<Type>
//Mengambil tipe this dari sebuah function type

//17. OmitThisParameter<Type>
//Menghapus parameter this dari sebuah function type

//18. ThisType<Type>
//memberitahu TS bahwa this punya properti bertipe <Type>

//19. Intrinsic String Manipulation Types:
//memanipulasi string di level type system (bukan runtime).

//    Uppercase<StringType>
//    Lowercase<StringType>
//    Capitalize<StringType>
//    Uncapitalize<StringType>
