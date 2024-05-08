import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";

interface ITodoListItem {
  todo: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({ todo }) => {
  return (
    <ListItem
      key={todo.id}
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton
          sx={{ "&:hover": { color: "indianred" } }}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        sx={{ wordWrap: "break-word", marginRight: "1rem" }}
        primary={todo.task}
      />
    </ListItem>
  );
};

export default TodoListItem;
