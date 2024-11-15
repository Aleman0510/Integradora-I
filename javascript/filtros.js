function aplicarFiltros() {
    const ordenar = document.getElementById('ordenar').value;
    const propiedades = document.querySelectorAll('.casa_container');

    const propiedadesArray = Array.from(propiedades);
    propiedadesArray.sort((a, b) => {
        const precioA = parseInt(a.getAttribute('data-precio'));
        const precioB = parseInt(b.getAttribute('data-precio'));
        const fechaA = new Date(a.getAttribute('data-fecha'));
        const fechaB = new Date(b.getAttribute('data-fecha'));

        if (ordenar === 'mayor-precio') {
            return precioB - precioA;
        } else if (ordenar === 'menor-precio') {
            return precioA - precioB;
        } else if (ordenar === 'recientes') {
            return fechaB - fechaA;
        } else if (ordenar === 'antiguos') {
            return fechaA - fechaB;
        }
    });

    const listaPropiedades = document.getElementById('property-details');
    listaPropiedades.innerHTML = '';
    propiedadesArray.forEach(propiedad => {
        listaPropiedades.appendChild(propiedad);
    });
}
