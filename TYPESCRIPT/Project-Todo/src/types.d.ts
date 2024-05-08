interface ITodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFunc = (text: string) => Promise<void>;
