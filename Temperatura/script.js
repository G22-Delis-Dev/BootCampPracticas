


function funcion1 () {
    let fah1 = prompt("Ingrese su temperatura en Fahrenheit");
    let kel1 = (fah1 - 32) * 5 / 9 + 273.15;
    let celc1 = (fah1 - 32) * 5 / 9;
    alert("Su grado en kelvin es " + kel1 + "\nSu grado en celcius es " + celc1);
}

function funcion2 () {
    let celc2 = prompt("Ingrese su temperatura en Celc");
    let fah2 = celc2 * (9/5)  + 32;
    let kel2 = (celc2 * 1) + 273.15;
    alert("Su grado en Fahrenheit es " + fah2 + "\nSu grado en Kelvin es " + kel2);
}

function funcion3 () {
    let kel3 = prompt("Ingrese su temperatura en Celc");
    let celc3 = kel3 - 273.15;
    let fah3 = celc3 * (9 / 5) + 32;
    alert("Su grado en Fahrenheit es " + fah3 + "\nSu grado en Celcius es " + celc3);
}