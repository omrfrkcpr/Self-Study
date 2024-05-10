import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import "./style.css";
import AddTodoComp from "./AddTodoComp";
import axios from "axios";
import { SweetAlertIcons, SweetPosition, notify } from "../helper/sweetalert";

const url: string = import.meta.env.VITE_BASE_URL;
const TodoList: React.FC = () => {
  const [progressTodos, setProgressTodos] = useState<ITodoType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ITodoType[]>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
      updateTodoLists(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (text) => {
    try {
      const {data} = await axios.post<ITodoType>(url, { task: text, isDone: false });
      notify(
        "The todo was created successfully!",
        SweetAlertIcons.SUCCESS,
        SweetPosition.Center
      );
      setTodos([...todos, data]);
      setProgressTodos([...progressTodos, data]);
    } catch (error) {
      console.log(error);
      notify(
        "The todo was not created successfully!",
        SweetAlertIcons.ERROR,
        SweetPosition.Center
      );
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      notify(
        "The todo was updated successfully!",
        SweetAlertIcons.SUCCESS,
        SweetPosition.TopStart
      );
    } catch (error) {
      console.log(error);
      notify(
        "The todo was not updated successfully!",
        SweetAlertIcons.ERROR,
        SweetPosition.BottomEnd
      );
    } 
  };
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify(
        "The todo was deleted successfully!",
        SweetAlertIcons.SUCCESS,
        SweetPosition.TopStart
      );
    } catch (error) {
      console.log(error);
      notify(
        "The todo was not deleted successfully!",
        SweetAlertIcons.ERROR,
        SweetPosition.BottomEnd
      );
    } 
  };

  useEffect(() => {
    getTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTodoLists = (todosa:ITodoType[]) => {
    const inProgress = todosa.filter((todo) => !todo.isDone);
    const completed = todosa.filter((todo) => todo.isDone);
    setProgressTodos(inProgress);
    setCompletedTodos(completed);
  };
  const onDragEnd = async (result:DropResult) => {
    //! result parametresi; drag and drop olayını temsil eder. Yani kimin nereden nereye sürüklendiğini bize bildirir.
    if (!result.destination){ //! result.destination yoksa silme işlemini gerçekleştir diyoruz. Bunmu hem uı da hem de backendde yapıyoruz. UI da yapmamızın sebebi sıralamanın değişmemesi.
      deleteTodo(result.draggableId).then(() => {
        if(result.source.droppableId === "progress"){
          setProgressTodos(progressTodos.filter((todo) => todo.id !== result.draggableId));
        }else{
          setCompletedTodos(completedTodos.filter((todo) => todo.id !== result.draggableId));
        }
      })
      return;
    } 
      

    const { source, destination, draggableId } = result; //! result içerisinden kaynağı, variş noktasını, ve ilgili elemanın idsini yakalıyoruz.
    if (
      source.droppableId === "completed" &&
      destination.droppableId === "completed"
    ) { //? eğer kaynak ve varış noktası aynı ise sadece sıralamayı değiştiriyoruz
      let updatedTodos = [...completedTodos];
      console.log(source.index);
      const destinationIndex= updatedTodos.find(
        (todo) => todo.id.toString() === draggableId
      ) as ITodoType;
      updatedTodos = updatedTodos.filter((todo) => todo.id !== draggableId);

      updatedTodos.splice(destination.index, 0, destinationIndex);
      setCompletedTodos(updatedTodos);
    } else if (
      source.droppableId === "progress" &&
      destination.droppableId === "progress"
    ) {//? eğer kaynak ve varış noktası aynı ise sadece sıralamayı değiştiriyoruz
      let updatedTodos = [...progressTodos];
      console.log(source.index);
      const destinationIndex = updatedTodos.find(
        (todo) => todo.id.toString() === draggableId
      ) as ITodoType;//! ilgili elementi yakalıyoruz.
      updatedTodos = updatedTodos.filter((todo) => todo.id !== draggableId);//* ilgili elementi listeden çıkardık. Çünkü sıralamasını değiştirecez.

      updatedTodos.splice(destination.index, 0, destinationIndex); //! splice metodu ile updatedTodos listesine ekleme yaptık. destination.index bize elementin varmak istediği indexi veriyor. O indexe yakaladığımız elementi ekledik.
      setProgressTodos(updatedTodos);//! güncel olana rrayi state e aktardık ki ilgili yer render olsun.
    } else { //? eğer kaynak ve varış noktası farklı ise todonun isdone özelliğini güncelleme yapıyoruz.
      console.log(result)
      const updatedTodos = [...todos];//! tüm todoları aldık.
      const movedTodo = updatedTodos.find(
        (todo) => todo.id.toString() === draggableId
      ) as ITodoType;//! ilgili elementi yakalıyoruz.
      if(movedTodo.isDone){
        const newTodos = [...progressTodos];
        newTodos.splice(destination.index, 0, {
          ...movedTodo,
          isDone: false,
        });
        setProgressTodos(newTodos);//! eger movedTodo isDone true ise false a çevirip ilgili elementi progressTodos sateine ekleme yaptık.
        setCompletedTodos(completedTodos.filter(item=>item.id !== movedTodo.id));//? completedTodos stateinden de çıkarmış olduk.
      }else{
        const newTodos = [...completedTodos];
        newTodos.splice(destination.index, 0, {
          ...movedTodo,
          isDone: true,
        });
        setCompletedTodos(newTodos);
        setProgressTodos(progressTodos.filter(item=>item.id !== movedTodo.id));
      }
      updatedTodos.splice(destination.index, 0, {
        ...movedTodo,
        isDone: !movedTodo.isDone,
      });
      setTodos(updatedTodos);
      toggleTodo(movedTodo);//! if e der girse else de girse farketmez dedik. Backend de güncelleme işlemini gerçekleştirebilmek icin togleTodo fonksiyonunu cagırdık ve içerisine güncellediğimiz halini parametre olarak yolladık.
    }
  };
  

  
  return (
    <>
      <AddTodoComp  addTodo={addTodo} />
      {/* react-beautiful-dnd den aldığımız provider ile ilgili yerleri sarmallıyoruz. */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid
          container
          sx={{
            d: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            mt: 3,
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            position={"relative"}
            className="myscrool scrool-progress"
            sx={{
              border: "1px solid purple",
              borderRadius: "0.5rem",
              minHeight: "350px",
              maxHeight: "350px",
              overflow: "auto",
            }}
          >
            {/* react-beautiful-dnd den Droppable ile ilgili yerleri sarmallıyoruz. Ve droppapğleId tanımlaması yapıyoruzki kaynak veya hedefin kim olduğunu bilelim. */}
            <Droppable droppableId="progress">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {/*Droppable componentinin içerisine kabul ettiği callback i açıyoruz ve bu callbackin aldığı provided değerini kapsayıcı elemente üstteki gibi yazıyoruz.  */}
                  <Typography
                    color="secondary"
                    align="center"
                    variant="h4"
                    className="title"
                  >
                    InProgress Todos
                  </Typography>
                  {progressTodos.length ? (
                    progressTodos.map((todo, index) => (
                      <TodoListItem
                        index={index} //? index'i de ekliyoruz. Bizden number ve ardışık olan unique bir değer bekliyor. Bu değere göre sıralama işlemini yapabiliyor.
                        key={todo.id}
                        todo={todo}
                      />
                    ))
                  ) : (
                    <Typography color="error" mt={3}>
                      No Progress Todos!
                    </Typography>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            position={"relative"}
            className="myscrool scrool-completed"
            sx={{
              border: "1px solid green",
              borderRadius: "0.5rem",
              minHeight: "350px",
              maxHeight: "350px",
              overflow: "auto",
            }}
          >
            <Droppable droppableId="completed">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Typography
                    sx={{ color: "green" }}
                    align="center"
                    variant="h4"
                    className="title"
                  >
                    Completed Todos
                  </Typography>
                  {completedTodos.length ? (
                    completedTodos.map((todo, index) => (
                      <TodoListItem
                        index={index}
                        key={todo.id}
                        todo={todo}
                      />
                    ))
                  ) : (
                    <Typography color="error" mt={3}>
                      No Completed Todos!
                    </Typography>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        </Grid>
      </DragDropContext>
    </>
  );
};

export default TodoList;
