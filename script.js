let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let addTask = document.getElementById("add-task-button");
let check = document.getElementsByTagName("checkbox");

function delTask (task) {
    task.parentNode.remove();
    rebuildTask();
}

buildTask();

function buildTask() {
    let num = taskList.length / 2;
    for (let i = 0; i < num; i++) {
        addingTask(taskList[2 * i], taskList[2 * i + 1]);
    }
}

function rebuildTask () {
    let listChildren = document.querySelectorAll(".task");
    let numb = listChildren.length;
    let listArray = new Array(numb);
    for (let i = 0; i < numb; i++) {
        listArray[2 * i] = listChildren[i].innerHTML;
        listArray[2 * i + 1] = listChildren[i].previousSibling.checked;
    }
    console.log(listArray);
    localStorage.setItem("tasks", JSON.stringify(listArray));
}

addTask.addEventListener("mouseover", function () {
    addTask.style.color = "black";
    addTask.style.background = "white";
    addTask.style.border = "1px solid black"
})
addTask.addEventListener("mouseout", function () {
    addTask.style.color = "";
    addTask.style.background = "";
    addTask.style.border = "";
})

addTask.addEventListener("click", function () {
    addingTask();
    rebuildTask();
})

function addingTask () {
    let text = document.querySelector("#input-task").value
    let ul = document.getElementById("task-list");
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
/*    checkBox.addEventListener("change", e => {
        check(checkBox);
    })*/
    const span = document.createElement("span");
    span.setAttribute("class", "task");
    span.appendChild(document.createTextNode(text));
    div.appendChild(checkBox);
    div.appendChild(span);
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delete-btn");
    delBtn.setAttribute("onclick", "delTask(this)");
    li.appendChild(div);
    li.appendChild(delBtn);
    ul.appendChild(li);
    document.getElementById("input-task").value = "";
}

/*function check(checkBox) {
    let span = document.querySelector("#task");
    if (checkBox.checked) {
        span.classList.add('crossedOut');
    } else {
        span.classList.remove('crossedOut');
    }
}*/

check.addEventListener("change", function () {
    let checkBox = document.getElementById("checkBox");
    let span = document.getElementById("task")
    if (checkBox.checked) {
        // alert("выбрано");
        span.classList.add("crossedOut");
    } else {
        // alert("не выбрано");
        span.classList.remove("crossedOut");
    }
})

