DnD için => https://www.npmjs.com/package/react-beautiful-dnd

Typescriptle beraber kullanmak için yüklenmesi gereken paket => @types/react-beautiful-dnd

İşte projenin ana özellikleri ve bu kod parçasının yapısı hakkında bilgiler:

1. Ana Bileşen: TodoList.tsx

TodoList adındaki ana bileşen, uygulamanın temel yapı taşını oluşturur.
DragDropContext bileşeni, sürükle ve bırak işlevselliğini sağlamak için kullanılır.
İki ana bölüm vardır: "InProgress Todos" ve "Completed Todos".
Droppable bileşenleri, sürükle ve bırak işleminin gerçekleşeceği alanları temsil eder.

2. API İletişimi ve Veri Yönetimi:

axios kütüphanesi kullanılarak bir API ile iletişim kurulur (getTodos, addTodo, toggleTodo, deleteTodo fonksiyonları).
useEffect ile bileşen yüklendiğinde ilk kez getTodos fonksiyonu çağrılarak başlangıç verileri çekilir.
Veriler, todos, progressTodos, ve completedTodos state'lerinde tutulur.

3. Sürükle ve Bırak İşlevselliği:

onDragEnd fonksiyonu, react-beautiful-dnd kütüphanesinin sunduğu sürükle ve bırak olaylarını yönetir.
Eğer varış noktası yoksa, ilgili todo silinir ve state'ler güncellenir.
Kaynak ve varış noktaları aynıysa sadece sıralama değiştirilir.
Kaynak ve varış noktaları farklıysa, ilgili todo'nun isDone özelliği güncellenir ve state'ler güncellenir.

- **Sürükle ve Bırak Sonucu Kontrolü:**

```tsx
if (!result.destination) {
  deleteTodo(result.draggableId).then(() => {
    if (result.source.droppableId === "progress") {
      setProgressTodos(progressTodos.filter((todo) => todo.id !== result.draggableId));
    } else {
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== result.draggableId));
    }
  });
  return;
}
```

- Eğer varış noktası (result.destination) yoksa, yani sürükle-bırak gerçekleşmediyse, ilgili todo silinir.
- Silme işlemi, deleteTodo fonksiyonu aracılığıyla backend tarafında da gerçekleştirilir.
- State'ler güncellenir, ve sürüklenen todo ilgili bölümden çıkarılır.
- **Kaynak ve Varış Noktalarının Kontrolü:**

```tsx
const { source, destination, draggableId } = result;

if (
  source.droppableId === "completed" &&
  destination.droppableId === "completed"
) {
  let updatedTodos = [...completedTodos];
  const destinationIndex = updatedTodos.find(
    (todo) => todo.id.toString() === draggableId
  ) as ITodoType;
  updatedTodos = updatedTodos.filter((todo) => todo.id !== draggableId);
  updatedTodos.splice(destination.index, 0, destinationIndex);
  setCompletedTodos(updatedTodos);
} else if (
  source.droppableId === "progress" &&
  destination.droppableId === "progress"
) {
  let updatedTodos = [...progressTodos];
  const destinationIndex = updatedTodos.find(
    (todo) => todo.id.toString() === draggableId
  ) as ITodoType;
  updatedTodos = updatedTodos.filter((todo) => todo.id !== draggableId);
  updatedTodos.splice(destination.index, 0, destinationIndex);
  setProgressTodos(updatedTodos);
}
```
- Eğer kaynak ve varış noktaları aynıysa, sadece sıralama değiştirilir.
- Bu durumlar için completed ve progress bölümleri ayrı ayrı kontrol edilir.

- **Farklı Kaynak ve Varış Noktaları İçin İşlemler**:

```tsx
... else {
  const updatedTodos = [...todos];
  const destinationIndex = updatedTodos.findIndex(
    (todo) => todo.id.toString() === draggableId
  );
  const [movedTodo] = updatedTodos.splice(destinationIndex, 1);

  if (movedTodo.isDone) {
    // ...
  } else {
    // ...
  }

  updatedTodos.splice(destinationIndex, 0, {
    ...movedTodo,
    isDone: !movedTodo.isDone,
  });

  setTodos(updatedTodos);
  toggleTodo(movedTodo);
}
```
- Eğer kaynak ve varış noktaları farklıysa, yani todo'nun bölgesi değişmişse:
    - movedTodo değişkeni ile sürüklenen todo'nun bilgilerini sakla.
    - Eğer sürüklenen todo tamamlanmışsa, progress bölgesine taşı ve durumunu güncelle.
    - Eğer sürüklenen todo tamamlanmamışsa, completed bölgesine taşı ve durumunu güncelle.
    - State'ler güncellenir, ve sıralama değişiklikleri uygulanır.
    - toggleTodo fonksiyonu ile todo'nun durumu backendde de güncellenir.

4. Alt Bileşen: TodoListItem.tsx

Her bir görevin temsil edildiği bir alt bileşen.
Draggable bileşeni, sürükle ve bırak işlevselliğini bu bileşen içinde sağlar.
Görevler, sürüklenip bırakılabilir hale getirilir ve kullanıcılar görevleri farklı kategorilere taşıyabilir.

5. Kullanıcı Geri Bildirimleri:

notify fonksiyonu ve SweetAlert bileşenleri, kullanıcıya çeşitli durumlar hakkında bilgi verir (örneğin, görev ekleme, güncelleme veya silme başarılı veya başarısız olduğunda).
Bu proje, kullanıcı dostu bir ToDo uygulamasını oluşturmak için çeşitli özellikleri içerir. Kullanıcılar, görevleri sürükleyip bırakarak sıralayabilir, yeni görevler ekleyebilir, görev durumlarını güncelleyebilir ve tamamlanan görevleri ayrı bir bölümde görebilir. Bu sayede, kullanıcılar görevlerini etkili bir şekilde yönetebilirler.