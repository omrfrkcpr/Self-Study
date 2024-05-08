import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";

// interface ITodoListItem {
//   todo: ITodoType;
//   deleteTodo: DeleteFunc;
//   toggleTodo: ToggleFunc;
// }
interface ITodoListItem extends ITodoListFunc {
  todo: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListItem
      key={todo.id}
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton
          sx={{ "&:hover": { color: "indianred" } }}
          aria-label="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        sx={{ wordWrap: "break-word", marginRight: "1rem" }}
        primary={todo.task}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};

export default TodoListItem;
