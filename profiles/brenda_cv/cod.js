function saludo() {
    alert("Hola");
}

saludo();

function fondoParrafos() {
    var parrafos = document.getElementsByTagName("p");
    parrafos[0].innerHTML = "Reemplazado";
    parrafos[1].style.color = "red";
    var lista = document.getElementsByClassName("azul");
    lista[0].style.cssText = "text-align:center; color:blue";
    document.getElementById("raro").innerHTML = "CONTENIDO ACTUAL";
}

function cambiarEstilo(archivoCSS) {
    document.getElementById("estilo1").href = archivoCSS;
    document.getElementById("estilo2").href = archivoCSS;
    document.getElementById("estilo3").href = archivoCSS;
    console.log()
}

var boton = document.getElementById("botonRegistro");
    // Agregar un event listener para el clic en el botón
    boton.addEventListener("click", function() {
    // Redireccionar a formulario.html
    window.location.href = "formulario.html";
});