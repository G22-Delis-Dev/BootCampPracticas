function sumar() {
    var numero1Element = document.getElementById("number1");
    var numero2Element = document.getElementById("number2");
    var valor1 = numero1Element.value.trim() === "" ? 0 : parseFloat(numero1Element.value);
    var valor2 = numero2Element.value.trim() === "" ? 0 : parseFloat(numero2Element.value);
    var addicion = valor1 + valor2;
    document.getElementById("resultado").textContent = "".concat(addicion);
}
