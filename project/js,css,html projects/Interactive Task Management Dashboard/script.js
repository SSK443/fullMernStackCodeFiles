// Initialize tasks array
let tasks = [];

// Get form and add event listener
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const categorySelect = document.getElementById("categorySelect");
    const dueDate = document.getElementById("dueDate");

    taskForm.addEventListener(
      "submit",
      function (event) {
        event.stopPropagation();
        event.preventDefault();
        // Basic validation
        if(!taskInput.value.trim()){
          alert("Error: Task title is required");
          return;
        }
        

        // Create task object
        const task = {
          title: taskInput.value,
          category: categorySelect.value,
          dueDate: dueDate.value || "No due date", // Fallback if no date is set
        };

        // Add task to array
        tasks.push(task);
        console.log(`Task added :${task}`);
        console.log(`All tasks ${tasks.length}`);

        console.log("form submitted");
        taskInput.value = "";
        dueDate.value = "";
      },
      false
    );
  },
  false
);
console.log(tasks);
