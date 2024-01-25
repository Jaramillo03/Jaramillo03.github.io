document.getElementById("loginForm").addEventListener("submit", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get email and password values
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Validate email using regular expression
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
    return false;
  }

  // Validate password length
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }

  // If email and password are valid, submit the form
  document.getElementById("loginForm").submit();
});
