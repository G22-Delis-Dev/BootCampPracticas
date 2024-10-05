const taskList = document.getElementById('taskList');
let contador = 0;
let completado = 0;

function validar() {
    const taskInput1 = document.getElementById('newTaskInput');
    const taskInput2 = document.getElementById('newDateInput');
    const newTask1 = taskInput1.value.trim();
    const newTask2 = taskInput2.value.trim();

    if (newTask1 === '') {
        alert("Ingrese la tarea");
        return false;
    }

    if (newTask2 === '') {
        alert("Ingrese la hora");
        return false;
    }

    contador += 1;

    if (newTask1 && newTask2) {
        addTask(newTask1, newTask2);
        taskInput1.value = ''; // Limpiar el campo de entrada después de añadir la tarea
        taskInput2.value = ''; // Limpiar el campo de entrada después de añadir la tarea
    } else {
        alert('Por favor, ingresa una tarea y una hora.');
    }
}

function restarcontador() {
    contador -= 1;
    console.log(`Tareas registradas: ${contador}`);
}

function tareacompleted() {
    completado += 1;
    console.log(`Tareas completadas: ${completado}`);
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
        if (contador == 0) {
            clearInterval(timeCheckInterval);
            return
        };

        const now = new Date();
        const Hour = now.getHours();
        const Minutes = now.getMinutes();


        if (Hour > taskHour || (Hour === taskHour && Minutes >= taskMinutes)) {
            if (!newListItem1.classList.contains('completed')) {
                newListItem1.classList.add('vencido');
                newListItem2.classList.add('vencido');

                restarcontador()

                if (contador === 0) {
                    clearInterval(timeCheckInterval);
                }
            } else {
                newListItem1.classList.add('vencido');
                newListItem2.classList.add('vencido');
                restarcontador()
            }

        }
    }

    // Ejecutar la comprobación de tiempo cada minuto
    const timeCheckInterval = setInterval(checkTime, 60_000);

    content.addEventListener('click', function () {
        if (newListItem1.classList.contains('vencido')) {
            alert("Esta tarea ya se ha vencido");
        } else {
            newListItem1.classList.toggle('completed');
            newListItem2.classList.toggle('completed');
            if (newListItem1.classList.contains('completed')) {
                tareacompleted()
            }
            else {
                completado -= 1;
                console.log(`Tareas completadas: ${completado}`);
            }
        }
    });

    checklist.addEventListener('click', function () {

        if (newListItem1.classList.contains('vencido')) {
            content.remove();
        } else if (newListItem1.classList.contains('completed')) {
            content.remove();
        } else {
            restarcontador();
            completado -= 1;
            content.remove();
        }

        if (contador === 0) {
            clearInterval(timeCheckInterval);
        }
    });


    content.appendChild(newListItem1);
    content.appendChild(newListItem2);
    content.appendChild(checklist);
    taskList.appendChild(content);
    console.log(`Tareas registradas: ${contador}`);
    console.log(`Tareas completadas: ${completado}`);
}



function eliminarTodo() {
    const divs = document.querySelectorAll('.li');

    if (divs.length > 0) {
        divs.forEach(function (div) {
            div.remove();
        });
        contador = 0;
        completado = 0;
        console.log(`Tareas registradas: ${contador}`);
        console.log(`Tareas completadas: ${completado}`);
    } else {
        alert("No hay tareas para eliminar");
    }
}
