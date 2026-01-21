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

//13. ReturnType<Type>

//14. InstanceType<Type>

//15. NoInfer<Type>

//16. ThisParameterType<Type>

//17. OmitThisParameter<Type>

//18. ThisType<Type>

//19. Intrinsic String Manipulation Types:
//    Uppercase<StringType>
//    Lowercase<StringType>
//    Capitalize<StringType>
//    Uncapitalize<StringType>
