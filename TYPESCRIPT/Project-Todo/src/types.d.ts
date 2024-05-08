interface ITodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFunc = (text: string) => Promise<void>;

type ToggleFunc = (todo: ITodoType) => Promise<void>;

type DeleteFunc = (id: string | number) => Promise<void>;

interface ITodoListFunc {
  deleteTodo: DeleteFunc;
  toggleTodo: ToggleFunc;
}
