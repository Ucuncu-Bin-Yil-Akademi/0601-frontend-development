const inputEl = document.getElementsByName("todoInput")[0];
const btnEl = document.getElementById("addTask");
const todoListEl = document.getElementsByClassName("todoList")[0];
const taskCountEl = document.getElementById("taskCount");

function handleAddTask() {
  const todoText = inputEl.value;
  if (todoText === "") return;
  const taskEl = document.createElement("div");
  taskEl.classList.add("task");

  const taskElText = document.createElement("span");
  taskElText.innerText = todoText;

  const iconEl = document.createElement("i");
  iconEl.classList.add("fa", "fa-trash", "fa-2xl");

  taskEl.appendChild(taskElText);
  taskEl.appendChild(iconEl);

  todoListEl.appendChild(taskEl);

  const taskElements = document.getElementsByClassName("task");
  taskCountEl.innerText = taskElements.length;
  inputEl.value = "";
}

btnEl.addEventListener("click", handleAddTask);

inputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleAddTask();
  }
});
