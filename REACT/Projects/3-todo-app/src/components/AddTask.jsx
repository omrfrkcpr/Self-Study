import { useState } from "react";

const AddTask = ({ todos, setTodos }) => {
  const [texT, setText] = useState("");
  const [day, setDay] = useState("");
  const [display, setDisplay] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = Math.ceil(Math.random() * 100) + 6;
    const id = todos.length + 1;

    // setTodos([{id:id,text:texT,day:day,isDone:false},...todos])
    const newTodos = { id: id, text: texT, day: day, isDone: false };
    setTodos([newTodos, ...todos]);

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
