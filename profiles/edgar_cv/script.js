document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Validar campos aquí
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('mensaje').value;
        let gender = document.getElementById('gender').value;

        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '' || gender.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Si todos los campos están llenos, envía el formulario (o puedes hacer otras operaciones aquí)
        alert('¡Formulario enviado con éxito!');
        form.reset(); // Limpiar el formulario después del envío
    });
});
