function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if(taskInput.value.trim() !== "") {
        var taskText = taskInput.value;
        var newTask = document.createElement("li");
        newTask.className = "task";
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Excluir</button>
            `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Por favor, Insira uma tarefa!");
    }
}
function deleteTask(element) {
    var task = element.parentElement;
    task.remove();
}