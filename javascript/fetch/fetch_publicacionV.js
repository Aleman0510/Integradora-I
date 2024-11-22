document.getElementById('publicar-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipoInmueble = document.querySelector('input[name="tipo-inmueble"]:checked')?.value;
    const precio = parseFloat(document.getElementById('precio').value);
    const calle = document.getElementById('calle').value;
    const colonia = document.getElementById('colonia').value;
    const cp = document.getElementById('cp').value;
    const terreno = parseFloat(document.getElementById('terreno').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const pisos = parseInt(document.getElementById('pisos').value);
    const garage = document.querySelector('input[name="garage"]:checked')?.value === 'true';
    const amueblado = document.querySelector('input[name="amueblado"]:checked')?.value === 'true';

    // Validar que todos los campos obligatorios estén completos
    if (!titulo || !descripcion || !tipoInmueble || isNaN(precio) || !calle || !colonia || !cp || isNaN(terreno) ||
        isNaN(habitaciones) || isNaN(banos) || isNaN(pisos) || garage === undefined || amueblado === undefined) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Preparar los datos para enviar
    const datos = {
        titulo_publicacion: titulo,
        descripcion_publicacion: descripcion,
        tipo_inmueble: tipoInmueble,
        precio_inmueble: precio,
        calle_inmueble: calle,
        colonia_inmueble: colonia,
        cp_inmueble: cp,
        terreno_inmueble: terreno,
        habitaciones: habitaciones,
        baños_int: banos,
        pisos: pisos,
        garage: garage,
        amueblado: amueblado,
    };

    try {
        // Realizar el fetch a tu API
        const response = await fetch(`/usuarios/:id/publicacion_venta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Suponiendo que guardas el token de usuario autenticado
            },
            body: JSON.stringify(datos)
        });

        // Manejar la respuesta
        const result = await response.json();

        if (response.ok) {
            alert("Publicación creada exitosamente.");
            // Puedes redirigir o limpiar el formulario aquí
            document.getElementById('publicar-form').reset();
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error("Error al realizar la publicación:", error);
        alert("Ocurrió un error inesperado. Por favor, intenta de nuevo.");
    }
});



  

  
  