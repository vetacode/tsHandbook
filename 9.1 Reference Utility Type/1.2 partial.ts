// Partial<Type>
//Partial<T>  ➜  semua properti T jadi opsional
// Artinya: objek tidak wajib memiliki semua properti dari type aslinya.

//PROBLEM: Update data tidak selalu kirim semua field
interface Todo {
  title: string;
  description: string;
}

function updateTodo(fields: Todo) {}

//-> Tidak bisa:
updateTodo({ description: 'Check' });
//Argument of type '{ description: string; }' is not assignable to parameter of type 'Todo'.
// Property 'title' is missing in type '{ description: string; }' but required in type 'Todo'.

{
  //SOLUSI: Partial<T> supaya bisa cuma update/kirim field yg berubah saja
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  // Loop semua properti T
  // Tambahkan ? ke setiap properti
  // Tipe aslinya tetap
}

{
  //Contoh real
  interface Todo {
    title: string;
    description: string;
  }

  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  function updateTodo2(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
    //Urutan penting
    // Spread kiri → kanan
    // Properti di kanan menimpa yang kiri
  }
  const todo1: Todo = { title: 'deskripsi', description: 'test' };
  //Pemanggilan function:
  const todo2 = updateTodo2(todo1, { description: 'updating todo desc' });
  //Hasil:
  // todo2 === {title: 'deskripsi', description: 'updating todo desc'}
}
