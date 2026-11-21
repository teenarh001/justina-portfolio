// GET THE HTML ELEMENTS

var taskForm = document.getElementById("taskForm");
var taskInput = document.getElementById("taskInput");
var taskDate = document.getElementById("taskDate");
var taskList = document.getElementById("taskList");
var taskCount = document.getElementById("taskCount");

// STORE TASKS

var tasks = JSON.parse(localStorage.getItem("academicTasks")) || [];

// DISPLAY TASKS

function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-message">No tasks added yet.</li>';
    }

    tasks.forEach(function(task, index) {
        var listItem = document.createElement("li");
        listItem.className = "task-item";

        if (task.completed) {
            listItem.classList.add("completed");
        }

        var taskInfo = document.createElement("div");
        taskInfo.className = "task-info";

        var taskTitle = document.createElement("h3");
        taskTitle.textContent = task.name;

        var taskDeadline = document.createElement("p");
        taskDeadline.textContent = task.date
            ? "Due: " + task.date
            : "No deadline set";

        taskInfo.appendChild(taskTitle);
        taskInfo.appendChild(taskDeadline);

        var actions = document.createElement("div");
        actions.className = "task-actions";

        var completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = task.completed ? "Undo" : "Complete";

        completeButton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        });

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
        });

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);

        listItem.appendChild(taskInfo);
        listItem.appendChild(actions);

        taskList.appendChild(listItem);
    });

    var remainingTasks = tasks.filter(function(task) {
        return !task.completed;
    }).length;

    taskCount.textContent = remainingTasks + " Pending";
}

// SAVE TASKS

function saveTasks() {
    localStorage.setItem("academicTasks", JSON.stringify(tasks));
    displayTasks();
}

// ADD A NEW TASK

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task description.");
        return;
    }

    var newTask = {
        name: taskName,
        date: taskDate.value,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskForm.reset();
});

// SHOW SAVED TASKS WHEN PAGE LOADS

displayTasks();