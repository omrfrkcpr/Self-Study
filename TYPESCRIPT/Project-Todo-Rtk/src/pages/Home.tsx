import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { useGetTodosQuery } from "../services/todos";

// interface ITodoType {
//   todo: string;
//   isDone: boolean;
//   id: string | number;
//   task?: string; //!optional
// }



const Home = () => {
  const { data } = useGetTodosQuery();
  console.log(data)

  return (
    <Container>
      <Typography color="error" align="center" variant="h2" component="h1">
        Todo App with Typescript
      </Typography>

      <AddTodoComp/>
      <TodoList  />
    </Container>
  );
};

export default Home;
