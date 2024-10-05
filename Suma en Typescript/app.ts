function sumar(): void {
    const numero1Element = document.getElementById("number1") as HTMLInputElement;
    const numero2Element = document.getElementById("number2") as HTMLInputElement; 


    const valor1 = numero1Element.value.trim() === "" ? 0 : parseFloat(numero1Element.value);
    const valor2 = numero2Element.value.trim() === "" ? 0 : parseFloat(numero2Element.value);


    const addicion = valor1 + valor2;

    document.getElementById("resultado")!.textContent = `${addicion}`
}