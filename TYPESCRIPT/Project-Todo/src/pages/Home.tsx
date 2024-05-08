import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";

interface ITodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

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

  useEffect(() => {
    getTodos();
  }, []);

  //? function type definition 2.Method
  // type AddFunc = (text: string) => Promise<void>;
  const addTodo: AddFunc = async (text) => {
    try {
      await axios.post(url, { task: text, isDone: false });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Typography align="center" color="error" variant="h3" component="h1">
        ToDo App with TypeScript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList />
    </Container>
  );
};

export default Home;
