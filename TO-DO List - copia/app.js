const taskList = document.getElementById('taskList');


const addtask = document.querySelector('#addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('newTaskInput');
    const newTask = taskInput.value.trim();
    if (newTask) {
        addTask(newTask);
        taskInput.value = ''; // Limpiar el campo de entrada después de añadir la tarea
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});

function addTask(taskDescription) {
    
    const content = document.createElement('div');
    const newListItem = document.createElement('li');
    const checklist = document.createElement('button');
    content.setAttribute('class', 'li');
    checklist.setAttribute('class', 'elimi');

   
    checklist.textContent = "Eliminar tarea";
    newListItem.textContent = taskDescription;

    content.addEventListener('click', function() {
        newListItem.classList.toggle('completed');

    });

    checklist.addEventListener('click', function() {
        content.remove();
    })

    

    content.appendChild(newListItem);
    content.appendChild(checklist);
    taskList.appendChild(content)
}

function eliminarTodo() {
    const divs = document.querySelectorAll('.li');

    if(divs.length > 0) {
        divs.forEach(function(div) {
            div.remove();
        });
    } else {
        alert("no hay tareas para eliminar")
    }

}