import { IconButton, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteTodoMutation, useToggleTodoMutation } from "../services/todos";
interface ITodoListItem {
  todo: ITodoType;

}

const TodoListItem: FC<ITodoListItem> = ({ todo}) => {
  const [toggleTodo] = useToggleTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", padding: "1rem" }}
      secondaryAction={
        <IconButton
          sx={{ "&:hover": { color: "red" } }}
          onClick={() => deleteTodo(todo.id)}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(todo)}
        primary={todo.todo}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};

export default TodoListItem;
