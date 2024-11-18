// Función para obtener los datos del usuario logueado
async function fetchUserData() {
    const userId = localStorage.getItem("userId"); // Recupera el userId desde el almacenamiento local

    if (!userId) {
        console.error("No se encontró el ID del usuario. Asegúrate de que el usuario haya iniciado sesión.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5500/usuarios/${userId}`);

        if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
        }

        const data = await response.json();
        if (data.length > 0) {
            const user = data[0]; // Asumiendo que el resultado es un array con un único objeto

            // Insertar los datos del usuario en los elementos correspondientes
            document.getElementById("nombre").textContent = user.nombre_usuario;
            document.getElementById("apellidop").textContent = user.apellidoP_usuario;
            document.getElementById("apellidom").textContent = user.apellidoM_usuario;
            document.getElementById("email-contacto").textContent = user.email_usuario;
            document.getElementById("whatsapp").textContent = user.telefono_usuario; // Reemplaza con el campo adecuado
        }
    } catch (error) {
        console.error(error);
        alert("No se pudo cargar la información del perfil.");
    }
}

// Llama a la función para obtener y mostrar los datos del usuario
fetchUserData();

