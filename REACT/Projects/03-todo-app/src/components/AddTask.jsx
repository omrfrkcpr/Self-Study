import { useState } from "react";

const AddTask = ({ todos, setTodos }) => {
  const [texT, setText] = useState("");
  const [day, setDay] = useState("");
  const [display, setDisplay] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = Math.ceil(Math.random() * 100) + 6;

    // find the biggest id number in todos
    const id =
      todos.reduce((maxId, todo) => {
        return todo.id > maxId ? todo.id : maxId;
      }, 0) + 1;
    const newTodos = { id: id, text: texT, day: day, isDone: false };

    //! 1.Method (temporary storage)
    // setTodos([{id:id,text:texT,day:day,isDone:false},...todos])

    //! 2.Method (local storage - 1)
    // todos = [newTodos, ...todos];
    // setTodos(todos);
    // localStorage.setItem("todo:tasks", JSON.stringify(todos));

    //! 3. Method (local storage - 2 (best))
    localStorage.setItem("todo:tasks", JSON.stringify([newTodos, ...todos]));
    setTodos(JSON.parse(localStorage.getItem("todo:tasks")));

    setText("");
    setDay("");
    console.log(setTodos); // new todo list
  };

  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
        <button
          className="btn"
          style={{ color: "white", background: display ? "red" : "purple" }}
          onClick={() => setDisplay(!display)}
        >
          {display ? "CLOSE" : "SHOW"} ADD TASK BAR
        </button>
      </header>

      {display && (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              onChange={(e) => setText(e.target.value)}
              value={texT}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              name="day"
              onChange={(e) => setDay(e.target.value)}
              value={day}
            />
          </div>
          <div>
            <button className="btn btn-submit text-white" type="submit ">
              SUBMİT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTask;
