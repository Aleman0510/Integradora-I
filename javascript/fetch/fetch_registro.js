document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  // Obtiene los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellidoP = document.getElementById("apellidop").value;
  const apellidoM = document.getElementById("apellidom").value;
  const email = document.getElementById("email").value;
  const edad = document.getElementById("edad").value;
  const telefono = document.getElementById("tel").value;
  const contraseña = document.getElementById("contraseña").value;
  const check_usuario = document.getElementById("ine1").files[0]; 
  const check_usuario2 = document.getElementById("ine2").files[0]; 

  // Crea un objeto FormData para enviar datos, incluyendo archivos
  const formData = new FormData();
  formData.append("nombre_usuario", nombre);
  formData.append("apellidoP_usuario", apellidoP);
  formData.append("apellidoM_usuario", apellidoM);
  formData.append("email_usuario", email);
  formData.append("contraseña_usuario", contraseña);
  formData.append("edad_usuario", edad);
  formData.append("telefono_usuario", telefono);
  formData.append("check_usuario", check_usuario); 
  formData.append("check_usuario2", check_usuario2); 

  // Realiza el fetch para enviar los datos al backend
  fetch("http://localhost:5500/usuario", { 
    method: "POST",
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al crear el usuario"); // Lanza un error si no se recibe una respuesta correcta
    }
    return response.json();
  })
  .then(data => {
    // Muestra el mensaje de éxito y redirige a la pantalla de inicio de sesión
    alert("Cuenta creada exitosamente. Redirigiendo a la pantalla de iniciar sesión...");
    window.location.href = "login_registro.html"; 
  })
  .catch(error => {
    // Muestra un mensaje de error si algo falla
    console.error("Error:", error);
    alert("Hubo un problema al crear tu cuenta. Inténtalo de nuevo.");
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
  
  