document.querySelector("#publicar-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)
  
    // Obtén los valores del formulario
    const titulo_publicacion = document.getElementById("titulo").value;
    const descripcion_publicacion = document.getElementById("descripcion").value;
    const precio_inmueble = document.getElementById("Precio Inmueble").value || null;
    const calle_inmueble = document.getElementById("Calle").value || null;
    const colonia_inmueble = document.getElementById("Colonia").value || null;
    const cp_inmueble = document.getElementById("Cp").value || null;
    const terreno_inmueble = null; // Este campo no se encuentra en tu formulario
    const habitaciones = document.getElementById("Habitaciones").value || null;
    const baños_int = document.getElementById("banos").value || null;
    const pisos = document.getElementById("Pisos").value || null;
    const garage = document.querySelector('input[name="garage"]:checked')?.value === "Si" || false;
    const amueblado = false; // Este campo no se encuentra en tu formulario
    const estado_publicacion = null; // Este campo no se encuentra en tu formulario
    const tipo_inmueble = document.querySelector('input[name="tipo-inmueble"]:checked')?.value || null;
    const fk_vendedor = null; // Este campo no se encuentra en tu formulario
  
    // Cuerpo del POST
    const data = {
      titulo_publicacion,
      descripcion_publicacion,
      precio_inmueble,
      calle_inmueble,
      colonia_inmueble,
      cp_inmueble,
      terreno_inmueble,
      habitaciones,
      baños_int,
      pisos,
      garage,
      amueblado,
      estado_publicacion,
      tipo_inmueble,
      fk_vendedor,
    };
  
    try {
      // Realiza el POST al backend
      const response = await fetch("http://localhost:5500/venta_publicacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Error al crear la publicación");
      }
  
      const result = await response.json();
      alert(`Publicación creada exitosamente con ID: ${result.id}`);
    } catch (error) {
      console.error("Error al crear la publicación:", error);
      alert("Error al crear la publicación: " + error.message);
    }
  });
  
  