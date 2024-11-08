/*LOGICA DE CIERRE DE SESION */
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón de cerrar sesión
    const logoutButton = document.getElementById("logoutButton");

    // Añade un evento click al botón de cerrar sesión
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            // Elimina el estado de sesión almacenado en localStorage
            localStorage.removeItem("isLoggedIn");
            alert("Has cerrado sesión con éxito");
            window.location.href = "/login_registro.html"; // Redirige a la página de inicio de sesión
        });
    }
});
  