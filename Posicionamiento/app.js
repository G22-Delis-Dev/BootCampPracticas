function toggleMore(button) {
    // Encuentra el div padre más cercano del botón clicado
    var contentDiv = button.parentNode;
    // Encuentra el elemento con la clase .moreText dentro de este div
    var moreText = contentDiv.querySelector("#span");
    
    // Alterna entre mostrar y ocultar el texto adicional
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerHTML = "Ver menos"; // Cambia el texto del botón
    } else {
        moreText.style.display = "none";
        button.innerHTML = "Ver más"; // Cambia el texto del botón
    }
}

let priximamente;
//modo oscuro