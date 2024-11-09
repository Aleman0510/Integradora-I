/*JS para icono de perfil*/
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario está logueado
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
        // Cambia los botones por el ícono de perfil
        const loginButton = document.getElementById("loginButton");
        const registerButton = document.getElementById("registerButton");
        const profileContainer = document.getElementById("profileContainer");

        if (loginButton && registerButton && profileContainer) {
            loginButton.style.display = "none"; // Oculta el botón de iniciar sesión
            registerButton.style.display = "none"; // Oculta el botón de registrarse

            profileContainer.style.display = "block"; // Muestra el contenedor del ícono de perfil
        }
    }
});



