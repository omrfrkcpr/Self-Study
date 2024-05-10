import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import "./style.css";
import { useGetTodosQuery } from "../services/todos";
import ReButton from "./ReButton";

const TodoList = () => {
  const { data: todos, isLoading, error, refetch } = useGetTodosQuery(); //! useGetTodosQuery ile todos api den datayı alıyoruz.
  //? data; ilgili veriyi temsil eder.
  //* isLoading; apiden data gelene kadar true moduna geçer, veri geldiğinde otomatik olarak false moduna geri döner.
  //? error; apiden data gelene kadar false moduna geçer, hata olduğunda otomatik olarak true moduna geri döner.
  //! refetch; cachei manuel güncellemek için kullanılan metot.

  const progressTodos = todos?.filter((item) => !item.isDone); //! tamamlanmayan taskler
  const completedTodos = todos?.filter((item) => item.isDone); //! tamamlanan taskler
  return (
    <>
      {isLoading ? (
        <>loading</>
      ) : error ? (
        <>error</>
      ) : (
        <>
          <ReButton text={"Refresh"} onClick={refetch} />
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
              <Typography
                color="secondary"
                align="center"
                variant="h4"
                className="title"
              >
                InProgress Todos
              </Typography>
              {progressTodos?.length ? (
                progressTodos.map((todo) => (
                  <TodoListItem key={todo.id} todo={todo} />
                ))
              ) : (
                <Typography color="error" mt={3}>
                  No Progress Todos!
                </Typography>
              )}
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
              <Typography
                sx={{ color: "green" }}
                align="center"
                variant="h4"
                className="title"
              >
                Completed Todos
              </Typography>
              {completedTodos?.length ? (
                completedTodos.map((todo) => (
                  <TodoListItem key={todo.id} todo={todo} />
                ))
              ) : (
                <Typography color="error" mt={3}>
                  No Completed Todos!
                </Typography>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default TodoList;
