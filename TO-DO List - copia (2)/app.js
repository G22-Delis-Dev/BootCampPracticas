const taskList = document.getElementById('taskList');
let contador = 0;

function validar() {
    const taskInput1 = document.getElementById('newTaskInput');
    const taskInput2 = document.getElementById('newDateInput');
    const newTask1 = taskInput1.value.trim();
    const newTask2 = taskInput2.value.trim();
    contador += 1;

    if (newTask1 === '') {
        alert("Ingrese la tarea");
        return false;
    }

    if (newTask2 === '') {
        alert("Ingrese la hora");
        return false;
    }

    if (newTask1 && newTask2) {
        addTask(newTask1, newTask2);
        taskInput1.value = ''; // Limpiar el campo de entrada después de añadir la tarea
        taskInput2.value = ''; // Limpiar el campo de entrada después de añadir la tarea
    } else {
        alert('Por favor, ingresa una tarea y una hora.');
    }
}



function addTask(taskDescription1, taskDescription2) {

    const content = document.createElement('div');
    const newListItem1 = document.createElement('li');
    const newListItem2 = document.createElement('li');
    const checklist = document.createElement('button');
    content.setAttribute('class', 'li');
    checklist.setAttribute('class', 'elimi');

    checklist.textContent = "Eliminar tarea";
    newListItem1.textContent = taskDescription1;
    newListItem2.textContent = taskDescription2;

    // Asume que taskDescription2 es una hora en formato "HH:MM"
    const [taskHour, taskMinutes] = taskDescription2.split(':').map(Number);

    // Función para comprobar la hora y cambiar la clase automáticamente
    function checkTime() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();

        if (currentHour > taskHour || (currentHour === taskHour && currentMinutes >= taskMinutes)) {
            newListItem1.classList.add('vencido');
            newListItem2.classList.add('vencido');

        }
    }

    // Ejecutar la comprobación de tiempo cada minuto
    const timeCheckInterval = setInterval(checkTime, 60000);

    content.addEventListener('click', function () {
        if (newListItem1.classList.contains('vencido')) {
            alert("Esta tarea ya se ha vencido");
        } else {
            newListItem1.classList.toggle('completed');
            newListItem2.classList.toggle('completed');

        }

    });

    checklist.addEventListener('click', function () {
        content.remove();



    });


    console.log(`Tareas pendientes: ${contador}`);
    content.appendChild(newListItem1);
    content.appendChild(newListItem2);
    content.appendChild(checklist);
    taskList.appendChild(content);
}

function eliminarTodo() {
    const divs = document.querySelectorAll('.li');

    if (divs.length > 0) {
        divs.forEach(function (div) {
            div.remove();
        });

    } else {
        alert("No hay tareas para eliminar");
    }
}
