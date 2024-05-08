import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoListProps extends ITodoListFunc {
  todos: ITodoType[];
  // deleteTodo: DeleteFunc;
  // toggleTodo: ToggleFunc;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  deleteTodo,
  toggleTodo,
}) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        gap: "0.5rem",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          p: 1,
        }}
      >
        <Typography color="secondary" align="center" variant="h4">
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color="error" mt={4}>
            No Progress Todos!
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          p: 1,
        }}
      >
        <Typography sx={{ color: "green" }} align="center" variant="h4">
          Completed Todos
        </Typography>
        {doneTodos.length ? (
          doneTodos.map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography color="error" mt={4}>
            No Progress Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
