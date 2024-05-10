import { ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
interface ITodoListItem {
  todo: ITodoType;
  index:number
}

const TodoListItem: FC<ITodoListItem> = ({
  todo,
  index,
}) => {
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {/** Draggable da ilgili elementi kapsayan component. draggagbleId parametresi, elemanın idsini temsil eder. */}
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
           {/*Draggable componentinin içerisine kabul ettiği callback i açıyoruz ve bu callbackin aldığı provided değerini kapsayıcı elemente üstteki gibi yazıyoruz.  */}
          <ListItem
            disableGutters
            sx={{ cursor: "move", padding: "1rem" }}
          >
            <ListItemText
              primary={todo.task}
              sx={{ wordWrap: "break-word" }}
            />
          </ListItem>
        </div>
      )}
    </Draggable>
  );
};

export default TodoListItem;
