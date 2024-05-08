import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { SweetAlertIcons, notify } from "../helper/notify";

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Home = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFunc = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  const deleteTodo: DeleteFunc = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  //? function type definition 2.Method
  // type AddFunc = (text: string) => Promise<void>;
  const addTodo: AddFunc = async (text) => {
    try {
      await axios.post(url, { task: text, isDone: false });
      notify("New Todo successfully created", SweetAlertIcons.SUCCESS);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography align="center" color="error" variant="h3" component="h1">
        ToDo App with TypeScript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Home;
