let calificaciones = [100, 90, 30, 70, 60, 50, 40, 80, 20, 10];


const students = [
    {
        name: "John Doe",
        grades: [82, 95, 77, 89]
    },
    {
        name: "Jane Smith",
        grades: [66, 84, 91, 78]
    },
    {
        name: "Michael Johnson",
        grades: [93, 72, 88, 100]
    },
    {
        name: "Emily Davis",
        grades: [74, 81, 69, 85]
    },
    {
        name: "David Martinez",
        grades: [87, 90, 79, 83]
    },
    {
        name: "Sophia Hernandez",
        grades: [92, 76, 88, 91]
    },
    {
        name: "James Wilson",
        grades: [59, 73, 80, 68]
    },
    {
        name: "Olivia Brown",
        grades: [85, 89, 93, 77]
    },
    {
        name: "William Jones",
        grades: [78, 81, 85, 90]
    },
    {
        name: "Isabella Garcia",
        grades: [91, 94, 88, 86]
    }
];

console.log(students);


// calificaciones.unshift(20);
// calificaciones.shift();
// calificaciones.push(40);
// calificaciones.pop();

// calificaciones.sort((a,b) => a - b);
// console.log(calificaciones);

let suma = 0;
let calificacion;
let aprobados = 0;
let reprobados = 0;

let sum = calificaciones.reduce((a, b) => a + b, 0);

console.log("La suma de los números es: " + sum);


for (calificacion of calificaciones) {
    if (calificacion >= 60 ) {
        console.log("estudiante aprobado su calificacion es = " + calificacion)
        aprobados++
    } else {
        console.log("estudiante reprobado su calificacion es = " + calificacion) 
        reprobados++
    }
}

for (let numero of calificaciones) {
    suma += numero;
}

let promedio = suma / calificaciones.length;

console.log("promedio de todas las calificaciones "+ promedio);
console.log("Cantidad de estudiantes aprobados = " + aprobados)
console.log("Cantidad de estudiantes reprobados = " + reprobados)