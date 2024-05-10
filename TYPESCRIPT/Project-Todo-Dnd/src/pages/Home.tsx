import Container from "@mui/material/Container";
import TodoList from "../components/TodoList";
import Header from "../components/Header";


const Home = () => {
  return (
    <Container>
      <Header/>
      <TodoList />
    </Container>
  );
};

export default Home;
