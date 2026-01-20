//Omit kebalikan dari Pick.

//Syntax: Omit<Type, Keys>
//Omit = ambil semuanya, kecuali yang disebutkan
// Type → tipe asal (interface / type)
// Keys → properti yang ingin dihapus, (string literal atau union "a" | "b")

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

//contoh menghapus 1 prop
export type TodoPreview = Omit<Todo, 'description'>;
//      ^ Error: Duplicate identifier 'TodoPreview'
//Soulsi: jadikan module -> tambahkan 'export'
