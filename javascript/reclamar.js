document.addEventListener('DOMContentLoaded', function () {
    // Simulación de que el usuario es nuevo
    const esNuevoUsuario = true; // Cambia esto a la condición real

    if (esNuevoUsuario) {
        const popup = document.getElementById('popup');
        const reclamarBtn = document.getElementById('reclamar-btn');

        popup.style.display = 'flex'; // Mostrar el popup

        reclamarBtn.addEventListener('click', function () {
            // Aquí podrías hacer una llamada a tu API para reclamar los 3 meses gratis

            // Redireccionar a la página principal
            window.location.href = 'index.html';
        });
    }
});
s   