function toggleFavorite(event, id) {
    event.stopPropagation(); // Evita que el clic en el corazón navegue a la página de detalles
    const heartIcon = event.target;

    if (heartIcon.classList.contains("fas")) {
        // Si ya es favorito, se elimina
        heartIcon.classList.remove("fas");
        heartIcon.classList.add("far");
    } else {
        // Si no es favorito, se añade
        heartIcon.classList.remove("far");
        heartIcon.classList.add("fas");
    }
}

