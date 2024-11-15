async function obtenerFavoritos(idUsuario) {
  try {
      const url = `http://localhost:5500/usuarios/${idUsuario}/favoritos`;
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error("Error al obtener los favoritos");
      }

      const favoritos = await response.json();

      // Selecciona el contenedor de la interfaz donde quieres mostrar los favoritos
      const contenedorFavoritos = document.getElementById("contenedor-favoritos");
      contenedorFavoritos.innerHTML = ""; // Limpia cualquier contenido previo

      favoritos.forEach(publicacion => {
          const publicacionElement = document.createElement("div");
          publicacionElement.classList.add("publicacion-favorita");

          // Agrega los detalles de la publicación, por ejemplo:
          publicacionElement.innerHTML = `
              <h3>${publicacion.titulo}</h3>
              <p>${publicacion.descripcion}</p>
              <!-- Agrega más detalles según tu estructura de datos -->
          `;

          contenedorFavoritos.appendChild(publicacionElement);
      });
  } catch (error) {
      console.error("Error:", error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const idUsuario = 1; // Cambia a tu variable real de usuario
  obtenerFavoritos(idUsuario);
});
