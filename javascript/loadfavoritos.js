document.addEventListener("DOMContentLoaded", async function() {
  await fetchFavoritos();
});



/*
async function agregarAFavoritos(idUsuario, idPublicacion, tipoPublicacion) {
    const data = {
      fk_usuario: idUsuario,
      [tipoPublicacion === 'venta' ? 'fk_publicacion_venta' : 'fk_publicacion_renta']: idPublicacion
    };
  
    try {
      const response = await fetch(http://localhost:5500/usuarios/${idUsuario}/favoritos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error("Error al agregar a favoritos");
      }
  
      // Actualiza la lista de favoritos
      await obtenerFavoritos(idUsuario);
      alert("Publicación agregada a favoritos");
    } catch (error) {
      console.error(error.message);
    }
  }
  */
