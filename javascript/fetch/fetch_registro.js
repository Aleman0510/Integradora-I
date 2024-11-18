document.getElementById('registrarse').addEventListener('click', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Capturamos los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellidop = document.getElementById('apellidop').value;
  const apellidom = document.getElementById('apellidom').value;
  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;
  const edad = document.getElementById('edad').value;
  const telefono = document.getElementById('tel').value;

  // Preparamos el objeto que vamos a enviar
  const data = {
      nombre_usuario: nombre,
      apellidoP_usuario: apellidop,
      apellidoM_usuario: apellidom,
      email_usuario: email,
      contraseña_usuario: contraseña,
      edad_usuario: edad,
      telefono_usuario: telefono,
  };

  // Realizamos la solicitud POST con fetch
  fetch('http://localhost:5500/usuario', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if (data.message === "Usuario creado exitosamente") {
          alert("Usuario registrado con éxito");
      } else {
          alert("Error: " + data.message);
          console.error(data);
      }
  })
  .catch(error => {
      console.error("Error al enviar los datos:", error);
      alert("Ocurrió un error al registrar el usuario.");
  });
});






/*document.getElementById("registroForm").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch("http://localhost:5500/usuario", {
        method: "POST",
        body: formData
      });
  
      if (response.ok) {
        const result = await response.json();
        alert("Usuario registrado exitosamente");
        console.log("Respuesta del servidor:", result);
      } else {
        const errorResult = await response.json();
        alert("Error en el registro: " + errorResult.message);
        console.error("Error del servidor:", errorResult);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar con el servidor.");
    }
  }); */
  
  