 
        function validateForm() {
            // Obtener los valores de los campos
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Expresión regular para validar el formato del correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validar el formato del correo electrónico
            if (!emailRegex.test(email)) {
                showError("Por favor, ingrese un correo electrónico válido.");
                return false;
            }

            // Validar la longitud de la contraseña
            if (password.length < 8) {
                showError("La contraseña debe tener al menos 8 caracteres.");
                return false;
            }

            // Si todas las validaciones son exitosas, el formulario se envía
            return true;
        }

        function showError(message) {
            // Crear un elemento div para mostrar el mensaje de error
            var errorDiv = document.createElement("div");
            errorDiv.style.color = "red";
            errorDiv.innerHTML = message;

            // Insertar el mensaje de error antes del formulario
            var form = document.querySelector("form");
            form.parentNode.insertBefore(errorDiv, form);
        }
  

