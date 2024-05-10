//! .d.ts uzantısnı typescript global alan olarak görüyor. Vu bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

interface ITodoType {
  isDone: boolean;
  id: string | number;
  task: string; 
}


