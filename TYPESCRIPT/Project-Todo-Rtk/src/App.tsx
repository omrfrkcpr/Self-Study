import Container from "@mui/material/Container";
import Home from "./pages/Home";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import {todosApi} from "./services/todos";
function App() {
  return (
<ApiProvider api={todosApi}>
      <Container>
        <Home />
      </Container>
    </ApiProvider>
  );
}

export default App;
