// Obtén el ID de la publicación desde el URL
const urlParams = new URLSearchParams(window.location.search);
const idPublicacion = urlParams.get("id");

// Referencia al contenedor donde se mostrará la información
const propertyDetailsContainer = document.getElementById("property-details");

// URL del endpoint de la API
const API_URL = `http://localhost:5500/venta_publicaciones/${idPublicacion}`;

// Función para obtener la información de la publicación
async function cargarDetallePublicacion() {
  try {
    const response = await fetch(API_URL); // Hacer petición GET al endpoint con el ID
    if (!response.ok) {
      throw new Error("No se encontró la publicación");
    }

    const data = await response.json(); // Convertir la respuesta en JSON
    const publicacion = data[0]; // Tomar el primer (y único) resultado

    // Verificar si hay imágenes y usar la primera imagen o un placeholder
    const imagen = publicacion.imagenes.length > 0 
      ? `data:image/jpeg;base64,${publicacion.imagenes[0]}` 
      : "assets/venta_assets/casa_placeholder.jpg";

    // Generar el contenido dinámico con los datos de la publicación
    propertyDetailsContainer.innerHTML = `
      <div class="detalle_container">
        <img src="${imagen}" alt="Casa Detalles" class="detalle-imagen">
        <div class="detalle_info">
          <h1>${publicacion.titulo_publicacion}</h1>
          <h2>$${publicacion.precio_inmueble.toLocaleString()} MXN</h2>
          <p>Superficie: ${publicacion.terreno_inmueble} m²</p>
          <p>Habitaciones: ${publicacion.habitaciones}</p>
          <p>Baños: ${publicacion.baños_int}</p>
          <p>Garage: ${publicacion.garage ? "Sí" : "No"}</p>
          <p>Amueblado: ${publicacion.amueblado ? "Sí" : "No"}</p>
          <p>Dirección: ${publicacion.calle_inmueble}, ${publicacion.colonia_inmueble}, ${publicacion.cp_inmueble}</p>
          <p>Descripción: ${publicacion.descripcion_publicacion}</p>
          <p>ID: ${publicacion.id_publicacion_venta}</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Error al cargar los detalles:", error);
    propertyDetailsContainer.innerHTML = "<p>No se pudo cargar la información de la publicación. Intenta nuevamente más tarde.</p>";
  }
}

// Llamar a la función para cargar la publicación al cargar la página
document.addEventListener("DOMContentLoaded", cargarDetallePublicacion);