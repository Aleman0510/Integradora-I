document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        // Muestra el cuadro de bloqueo
        const bloqueo = document.getElementById("bloqueo");
        bloqueo.style.display = "flex";

        // Redirige al usuario al hacer clic en el cuadro
        bloqueo.addEventListener("click", function () {
            window.location.href = "login_registro.html"; // Cambia esto a la URL de tu página de inicio de sesión
        });
    } else {
        // Oculta el cuadro de bloqueo si el usuario está logueado
        document.getElementById("bloqueo").style.display = "none";
    }
});
