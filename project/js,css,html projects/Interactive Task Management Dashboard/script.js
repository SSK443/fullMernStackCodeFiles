// Initialize tasks array from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Get DOM elements
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const categorySelect = document.getElementById("categorySelect");
  const dueDate = document.getElementById("dueDate");
  const taskList = document.getElementById("taskList");
  const searchInput = document.getElementById("searchInput");

  // Function to render tasks
  const renderTasks = () => {
    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";
    const today = new Date().toISOString().split("T")[0];
    taskList.innerHTML = "";
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm)
    );
    if (filteredTasks.length === 0) {
      taskList.innerHTML = `
        <div class="bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-2xl shadow-md flex items-center justify-center h-32">
          <p class="text-gray-500 font-medium">${
            searchTerm ? "No matching tasks..." : "No tasks yet..."
          }</p>
        </div>
      `;
      return;
    }
    filteredTasks.forEach((task) => {
      const isOverdue = task.dueDate !== "No due date" && task.dueDate < today;
      const taskCard = document.createElement("div");
      taskCard.className = `bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-2xl shadow-md task-card ${
        isOverdue ? "border-2 border-red-500" : ""
      }`;
      taskCard.setAttribute("draggable", "true");
      taskCard.dataset.index = tasks.indexOf(task);
      taskCard.innerHTML = `
        <h3 class="text-lg font-semibold text-gray-900 mb-2">${task.title}</h3>
        <p class="text-sm text-gray-600 mb-1">Category: <span class="font-medium">${
          task.category
        }</span></p>
        <p class="text-sm text-gray-600 mb-3">Due: <span class="font-medium">${
          task.dueDate
        }</span></p>
        <button 
          class="text-red-500 hover:text-red-700 font-medium text-sm transition-colors duration-200 transform hover:scale-105" 
          onclick="deleteTask(${tasks.indexOf(task)})"
        >
          Delete
        </button>
      `;
      taskList.appendChild(taskCard);
    });

    // Add drag event listeners
    const taskCards = taskList.querySelectorAll(".task-card");
    taskCards.forEach((card) => {
      card.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", card.dataset.index);
        console.log("Dragging task at index:", card.dataset.index);
      });
      card.addEventListener("dragover", (event) => {
        event.preventDefault();
        console.log("Dragging over task card:", card.dataset.index);
      });
      card.addEventListener("dragenter", (event) => {
        card.classList.add("bg-gray-100", "border-2", "border-indigo-500");
      });
      card.addEventListener("dragleave", (event) => {
        card.classList.remove("bg-gray-100", "border-2", "border-indigo-500");
      });
      card.addEventListener("drop", (event) => {
        event.preventDefault();
        const draggedIndex = parseInt(event.dataTransfer.getData("text/plain"));
        const targetIndex = parseInt(card.dataset.index);
        if (draggedIndex !== targetIndex) {
          const [draggedTask] = tasks.splice(draggedIndex, 1);
          tasks.splice(targetIndex, 0, draggedTask);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          renderTasks();
          console.log(
            "Dropped task from index",
            draggedIndex,
            "to",
            targetIndex
          );
          console.log("Updated tasks:", tasks);
        }
      });
    });
  };

  // Function to delete a task
  window.deleteTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    console.log("Task deleted, remaining tasks:", tasks);
  };

  // Form submission
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!taskInput.value.trim()) {
      console.log("Error: Task title is required");
      return;
    }
    const task = {
      title: taskInput.value.trim(),
      category: categorySelect.value,
      dueDate: dueDate.value || "No due date",
    };
    tasks.push(task);
    console.log("Task added:", task);
    console.log("All tasks:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    dueDate.value = "";
    renderTasks();
  });

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderTasks();
    });
  }

  // Initial render
  renderTasks();
});
