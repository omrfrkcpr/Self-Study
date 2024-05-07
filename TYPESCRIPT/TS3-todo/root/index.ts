enum Status {
  Active,
  Completed,
}

interface Task {
  task: string;
  status: Status;
}

type Tasklist = Task[];

//DOM

const input = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addTodoBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;

//To-Do List
let tasks: Tasklist = [];

//Toggle Status
function toggleStatus(index: number) {
  tasks[index].status =
    tasks[index].status === Status.Active ? Status.Completed : Status.Active;
  updateTask();
}

//Update Task
function updateTask() {
  list.innerHTML = "";
  tasks.forEach((t, index) => {
    const li = document.createElement("li");
    li.textContent = t.task;
    li.classList.add(t.status === Status.Completed ? "completed" : "active");
    li.addEventListener("click", () => toggleStatus(index));
    list.appendChild(li);
  });
}

//Add Task
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask) {
    tasks.push({ task: newTask, status: Status.Active });
    updateTask();
    input.value = "";
  } else {
    alert("Please enter a task");
    return;
  }
});
