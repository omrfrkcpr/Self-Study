import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const ShowTasks = ({ todos, setTodos }) => {
  const deleteTodo = (rmv) => {
    //! 1. Method (local storage)
    // todos = todos.filter((i) => i.id !== rmv);
    // setTodos(todos);
    // localStorage.setItem("todo:tasks", JSON.stringify(todos));

    //! 2. Method (local storage - best)
    localStorage.setItem(
      "todo:tasks",
      JSON.stringify(todos.filter((i) => i.id !== rmv))
    );
    setTodos(JSON.parse(localStorage.getItem("todo:tasks")));
  };

  const styleStorage = (x) => {
    localStorage.setItem(
      "todo:tasks",
      JSON.stringify(
        todos.map((a) => (a.id === x.id ? { ...a, isDone: !a.isDone } : a))
      )
    );
    setTodos(JSON.parse(localStorage.getItem("todo:tasks")));
  };

  return (
    <div>
      {todos.map((x) => {
        return (
          <div
            className={x.isDone ? "done" : "task"}
            onDoubleClick={() => styleStorage(x)}
          >
            <h3>
              {x.text}{" "}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteTodo(x.id)}
              />
            </h3>
            <h6>{x.day} </h6>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTasks;
