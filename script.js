var addModal = document.getElementById('addTaskModal');
var taskList = document.getElementById('task-list');
var newTask = document.getElementById('newTaskText');


var todos = [];


function openModal() {
    addModal.classList.remove('hidden');
}

function closeModal() {
    addModal.classList.add('hidden');
}

function deleteTask(element) {
    for (let index = 0; index < todos.length; index++) {
        const elm = todos[index];
        if (elm.id == element.path[0].id) {
            todos.splice(index, 1);
        }
    }
    element.path[0].parentNode.removeChild(element.path[0].parentNode);
    console.log(index);
    console.log(element.path[0].id);
}

function createList() {

}

function addTask() {

    let newtask = {
        id: todos.length + 1,
        task: newTask.value
    }
    todos.push(newtask);

    var li = document.createElement("li");
    li.classList.add("task-item");

    var img = document.createElement("img");
    img.src = "https://img.icons8.com/android/24/000000/trash.png";

    img.onclick = function () {
        for (let index = 0; index < todos.length; index++) {
            const elm = todos[index];
            if (elm.id == this.id) {
                todos.splice(index, 1);
            }
        }
        this.parentElement.remove();
    }


    img.id = todos.length + 1;

    var h5 = document.createElement("h5");
    h5.innerHTML = newTask.value;

    li.appendChild(h5);
    li.appendChild(img);
    li.draggable = true;
    taskList.appendChild(li);
}


function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
}



