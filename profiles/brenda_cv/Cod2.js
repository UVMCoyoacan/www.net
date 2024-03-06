document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;
        var genero = document.getElementById("gender").value;
        var preferencias = document.querySelectorAll('input[name="preferencias"]:checked');

        if (nombre === '' || email === '' || mensaje === '' || genero === '' || preferencias.length === 0) {
            alert("Por favor, complete todos los campos del formulario.");
        } else {
            alert("Los datos han sido enviados.");
            form.reset();
        }
    });
});
