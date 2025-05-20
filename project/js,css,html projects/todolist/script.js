const display=document.querySelector("#display");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
console.log(tasks);

// Get saved tasks from localStorage, or start with empty list

// 👉 This line checks if there are any saved tasks in the browser.
// If yes, it loads them.
// If not, it creates an empty list.

function saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
// console.log(saveTasks());


// 👉 This function saves the tasks list to your browser (localStorage).
// It turns the list into a string using JSON.stringify().


function showTasks(){
  taskList.innerHTML="";
  tasks.forEach((value,index)=>{
    const list = document.createElement("li");
    list.textContent = value;

    // For each task:
    // Create a new list item (<li>)
    // Set the text to the task name

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // 👉 Create a "Delete" button next to the task.

    deleteBtn.addEventListener(
      "click",
      function () {
        tasks.splice(index, 1); // Remove the task from the list
        saveTasks(); // Save updated list
        showTasks(); // Show updated list

        //  👉 When the "Delete" button is clicked:
        // Remove the task from the array
        // Save the new list
        // Update the screen
      },
      false
    );
    list.appendChild(deleteBtn); // Add delete button to the list item
    taskList.appendChild(list); // Add the item to the list on the page

    // 👉 Show the task with its delete button on the screen.
  });

 
}

addBtn.addEventListener("click",function(){
  const task=display.value.trim();

  //👉 When you click "Add Task", get the text from the input box.
// trim() removes extra spaces.


  if(task){
    tasks.push(task); // Add task to the list
    display.value = ""; // Clear input box
    saveTasks(); // Save tasks
    showTasks(); // Show updated list
  }
},false);


///👉 If the input is not empty:
// Add task to the list
// Clear the input
// Save and display the updated list

display.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    addBtn.click();
  }
},false)

// 👉 If you press Enter in the input box, it will add the task (same as clicking the button).

showTasks();

//👉 When the page loads, this shows any saved tasks.