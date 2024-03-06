// Función para cambiar los colores con el botón 1
document.getElementById("cambiar-colores-btn1").onclick = function() {
    cambiarEstilos(1);
};

// Función para cambiar los colores con el botón 2
document.getElementById("cambiar-colores-btn2").onclick = function() {
    cambiarEstilos(2);
};

// Función para cambiar los colores con el botón 3
document.getElementById("cambiar-colores-btn3").onclick = function() {
    cambiarEstilos(3);
};

// Función para cambiar los estilos de la página
function cambiarEstilos(numeroEstilo) {
    // Ocultar todos los estilos CSS
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`stylesheet${i}`).disabled = true;
    }

    // Activar el estilo correspondiente
    document.getElementById(`stylesheet${numeroEstilo}`).disabled = false;
}

var boton = document.getElementById("botonRegistro");
    // Agregar un event listener para el clic en el botón
    boton.addEventListener("click", function() {
    // Redireccionar a formulario.html
    window.location.href = "formulario.html";
});

