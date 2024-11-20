// Referencia al contenedor donde se mostrarán las propiedades
const propertyDetailsContainer = document.getElementById("property-details");

// URL del endpoint de la API para obtener todas las publicaciones de renta
const API_URL = `http://localhost:5500/renta_publicaciones`;

// Función para obtener y mostrar las publicaciones de renta
async function cargarPublicacionesRenta() {
  try {
    const response = await fetch(API_URL); // Hacer petición GET al endpoint
    if (!response.ok) {
      throw new Error("No se pudieron cargar las publicaciones");
    }

    const data = await response.json(); // Convertir la respuesta en JSON

    // Limpiar el contenedor antes de agregar nuevas publicaciones
    propertyDetailsContainer.innerHTML = '';

    // Iterar sobre cada publicación y generar el HTML correspondiente
    data.forEach(publicacion => {
      // Verificar si hay imágenes y usar la primera imagen o un placeholder
      const imagen = publicacion.imagenes && publicacion.imagenes.length > 0
        ? `data:image/jpeg;base64,${publicacion.imagenes[0]}`
        : "assets/venta_assets/casa_placeholder.jpg";

      // Crear el contenedor de la propiedad
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('casa_container');

      // Añadir el evento onclick para redirigir a la página de detalles
      propertyCard.onclick = () => {
        location.href = `DetallesPropiedadrenta.html?id=${publicacion.id_publicacion_renta}`;
      };

      // Generar el contenido HTML de la propiedad
      propertyCard.innerHTML = `
        <img src="${imagen}" alt="Casa ${publicacion.id_publicacion_renta}" class="casa-imagen">
        <div class="info">
          <h3>$${publicacion.precio_inmueble.toLocaleString()} MXN</h3>
          <p>${publicacion.terreno_inmueble} m²</p>
          <p>${publicacion.calle_inmueble}, ID:${publicacion.id_publicacion_renta}</p>
          <i class="far fa-heart" onclick="toggleFavorite(event, '${publicacion.id_publicacion_renta}')"></i>
        </div>
      `;

      // Añadir la tarjeta de la propiedad al contenedor principal
      propertyDetailsContainer.appendChild(propertyCard);
    });
  } catch (error) {
    console.error("Error al cargar las publicaciones:", error);
    propertyDetailsContainer.innerHTML = "<p>No se pudieron cargar las publicaciones. Intenta nuevamente más tarde.</p>";
  }
}

// Llamar a la función para cargar las publicaciones al cargar la página
document.addEventListener("DOMContentLoaded", cargarPublicacionesRenta);
