let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
const list = document.getElementById('task-list');
const task = document.getElementById('input-task');
let check = document.getElementsByTagName("checkbox");

displayTasks();

function deleteItem(index) {
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList))
    displayTasks();
}

function addItem() {
    taskList.push({
        value: task.value,
        checked: false,
    })

    localStorage.setItem('tasks', JSON.stringify(taskList));
    task.value='';
    displayTasks();
}

function displayTasks(){
    let items = ""
    taskList.forEach(function(task) {
        items +=`<li><input type="checkbox"><span class="task">${task.value}</span>
        <button class="delete-btn" onclick="deleteItem();">X</button></li>`
    })
    list.innerHTML = items;
}

check.addEventListener("change", function () {
    let checkBox = document.getElementById("checkBox");
    let span = document.getElementById("task")
    if (checkBox.checked) {
        span.classList.add("crossedOut");
    } else {
        span.classList.remove("crossedOut");
    }
})

