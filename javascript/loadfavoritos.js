document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/getFavoritos')
    .then(response => response.json())
    .then(favoritos => {
        const container = document.getElementById("favoritosContainer");
        favoritos.forEach(favorito => {
            const card = document.createElement("div");
            card.classList.add("favorito-card");

            card.innerHTML = `
                <img src="${favorito.imagen_url}" alt="${favorito.nombre}">
                <div class="favorito-details">
                    <h3>${favorito.nombre}</h3>
                    <p>${favorito.descripcion}</p>
                </div>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));
});
