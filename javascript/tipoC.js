document.addEventListener('DOMContentLoaded', function () {
    const usuarioBox = document.getElementById('usuario-box');
    const vendedorBox = document.getElementById('vendedor-box');

    usuarioBox.addEventListener('click', function () {
        window.location.href = 'login_registro.html'; // Cambiar a la página de crear cuenta de usuario
        window.location.href = 'index.html';
    });

    vendedorBox.addEventListener('click', function () {
        window.location.href = 'login_registro.html';
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
});
