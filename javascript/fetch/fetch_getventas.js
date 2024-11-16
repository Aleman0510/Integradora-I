// URL del endpoint de la API
const API_URL = "http://localhost:5500/venta_publicaciones";
      
// Contenedor principal donde se añadirán las publicaciones
const mainContainer = document.getElementById("property-details");

// Función para cargar las publicaciones desde la API
async function cargarPublicaciones() {
  try {
    const response = await fetch(API_URL); // Realiza la petición GET
    const publicaciones = await response.json(); // Convierte la respuesta a JSON

    // Limpia el contenedor antes de agregar contenido
    mainContainer.innerHTML = "";

    // Recorre las publicaciones obtenidas y genera el HTML dinámico
    publicaciones.forEach((publicacion) => {
      // Crear un contenedor para cada publicación
      const casaContainer = document.createElement("div");
      casaContainer.classList.add("casa_container");

      // Generar la ruta de la imagen (usa la primera imagen del arreglo, si existe)
      const imagen = publicacion.imagenes.length > 0 ? publicacion.imagenes[0] : "assets/venta_assets/casa_placeholder.jpg";

      // Generar el HTML interno
      casaContainer.innerHTML = `
        <img src="${imagen}" alt="${publicacion.titulo_publicacion}" class="casa-imagen">
        <div class="info">
          <h3>$${publicacion.precio_inmueble.toLocaleString()} MXN</h3>
          <p>${publicacion.terreno_inmueble} m²</p>
          <p>Calle ${publicacion.calle_inmueble}, Colonia: ${publicacion.colonia_inmueble}</p>
          <i class="far fa-heart" onclick="toggleFavorite(event, '${publicacion.id_publicacion_venta}')"></i>
        </div>
      `;

      // Configurar el comportamiento al hacer clic (redirigir a detalles de la propiedad)
      casaContainer.onclick = () => {
        window.location.href = `DetallesPropiedadventa.html?id=${publicacion.id_publicacion_venta}`;
      };
      

      // Agregar el contenedor al DOM
      mainContainer.appendChild(casaContainer);
    });
  } catch (error) {
    console.error("Error al cargar las publicaciones:", error);
    mainContainer.innerHTML = `<p>Error al cargar las publicaciones. Intenta de nuevo más tarde.</p>`;
  }
}

// Cargar las publicaciones cuando la página esté lista
document.addEventListener("DOMContentLoaded", cargarPublicaciones);