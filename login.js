document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar el correo electrónico mediante expresiones regulares
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Correo electrónico no válido');
        return;
    }

    // Validar la contraseña
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
    }

    // Si todas las validaciones son correctas, proceder con el inicio de sesión
    alert('Inicio de sesión exitoso');
});
