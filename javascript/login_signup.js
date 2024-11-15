/*Animacion de transicion entre registro e iniciar sesion*/
const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");

const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

/*LOGICA DE INICIO DE SESION*/
document.addEventListener("DOMContentLoaded", function () {
    const inputform = document.getElementById("form_login");

    inputform.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Obtiene los valores ingresados en los campos de usuario y contraseña
        const inputUsername = document.getElementById("username").value;
        const inputPassword = document.getElementById("password").value;

        try {
            // Realiza una solicitud fetch al servidor para obtener todos los usuarios
            const response = await fetch("http://localhost:5500/usuarios");

            if (response.ok) {
                const usuarios = await response.json();

                // Busca un usuario cuyo email y contraseña coincidan con los ingresados
                const usuarioEncontrado = usuarios.find(usuario => 
                    usuario.email_usuario === inputUsername && 
                    usuario.contraseña_usuario === inputPassword
                );

                if (usuarioEncontrado) {
                    alert("Inicio de sesión exitoso");
                    localStorage.setItem("isLoggedIn", "true"); // Guarda el estado de sesión
                    localStorage.setItem("userId", usuarioEncontrado.id_usuario); // Guarda el userId del usuario autenticado
                    window.location.href = "index.html"; // Redirige a la página principal
                } else {
                    alert("Nombre de usuario o contraseña incorrectos");
                }
            } else {
                alert("Error al obtener los datos de los usuarios");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
        }
    });

    // Verifica si el usuario ya está logueado y redirige si es el caso
    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "index.html"; // Redirige a la página principal si ya está logueado
    }
});
