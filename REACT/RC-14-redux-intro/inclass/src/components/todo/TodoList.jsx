import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodo } from "../../store/todoReducer";

const TodoList = () => {
  // const { todoList } = useSelector((state) => state.todo);
  const todoList = useSelector((state) => state.todo.todoList);

  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
