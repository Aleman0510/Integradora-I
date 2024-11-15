document.getElementById("registroForm").addEventListener("submit", async function(event) {
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
  });
  
  