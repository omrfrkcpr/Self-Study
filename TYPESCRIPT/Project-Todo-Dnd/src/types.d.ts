//! .d.ts uzantısnı typescript global alan olarak görüyor. Vu bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

interface ITodoType {
  isDone: boolean;
  id: string | number;
  task: string; 
}

type AddFn = (text: string) => Promise<void>;

type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;

