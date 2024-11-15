document.addEventListener("DOMContentLoaded", function() {
    // Recuperar y mostrar los favoritos al cargar la página
    fetchFavoritos();

    // Asignar evento de click a los iconos de corazón
    document.querySelectorAll('.fa-heart').forEach(icon => {
        icon.addEventListener('click', function(event) {
            const propertyId = icon.closest('.casa_container').dataset.id;
            toggleFavorite(event, propertyId);
        });
    });
});

async function fetchFavoritos() {
    try {
        const response = await fetch("http://localhost:5500/favoritos");
        if (response.ok) {
            const favoritos = await response.json();
            favoritos.forEach(fav => {
                const heartIcon = document.querySelector(`.casa_container[data-id="${fav.propertyId}"] .fa-heart`);
                if (heartIcon) {
                    heartIcon.classList.remove("far");
                    heartIcon.classList.add("fas");
                }
            });
        } else {
            console.error("Error al obtener favoritos");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function toggleFavorite(event, propertyId) {
    event.stopPropagation();
    const icon = event.target;

    try {
        let response;
        if (icon.classList.contains("fas")) {
            // Eliminar de favoritos
            response = await fetch(`http://localhost:5500/favoritos/${propertyId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                icon.classList.remove("fas");
                icon.classList.add("far");
            }
        } else {
            // Añadir a favoritos
            response = await fetch("http://localhost:5500/favoritos", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ propertyId })
            });
            if (response.ok) {
                icon.classList.remove("far");
                icon.classList.add("fas");
            }
        }
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al actualizar favoritos. Inténtalo de nuevo más tarde.");
    }
}
