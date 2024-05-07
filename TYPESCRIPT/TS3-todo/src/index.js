var Status;
(function (Status) {
  Status[(Status["Active"] = 0)] = "Active";
  Status[(Status["Completed"] = 1)] = "Completed";
})(Status || (Status = {}));
//DOM
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");
//To-Do List
let tasks = [];
//Toggle Status
function toggleStatus(index) {
  tasks[index].status =
    tasks[index].status === Status.Active ? Status.Completed : Status.Active;
  renderTask();
}
//Render Task
function renderTask() {
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
    renderTask();
    input.value = "";
  } else {
    alert("Please enter a task");
    return;
  }
});
