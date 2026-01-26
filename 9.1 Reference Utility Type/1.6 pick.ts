//Syntax: Pick<Type, Keys>
// Type → tipe sumber (biasanya interface atau type)
// Keys → string literal atau union string literal yang harus merupakan key dari Type

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

//Aplikasinya:
const todo2: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
