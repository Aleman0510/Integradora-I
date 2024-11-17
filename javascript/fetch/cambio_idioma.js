// Diccionario para los textos en ambos idiomas
const translations = {
    tx1: { es: "Inicio", en: "Home" },
    tx2: { es: "Venta", en: "Sell" },
    tx3: { es: "Renta", en: "Rent" },
    tx4: { es: "Suscripciones", en: "Subscriptions" },
    tx5: { es: "Iniciar sesión", en: "Log in" },
    tx6: { es: "Registrarse", en: "Sign up" },
    tx7: { es: "¡Encuentra el hogar ideal!", en: "Find the ideal home!" },
    tx8: { es: "Encuentra el hogar de tus sueños con la mayor facilidad y confianza.", en: "Find your dream home with ease and confidence." },
    tx9: { es: "¿Por qué UrHomeCUU?", en: "Why UrHomeCUU?" },
    tx10: { es: "En UrHomeCUU, entendemos que encontrar el hogar ideal o vender una propiedad puede ser un proceso complejo y abrumador. Por eso, hemos diseñado una plataforma sencilla y eficiente que conecta a propietarios e interesados de manera rápida y segura. Nuestro objetivo es brindar a nuestros usuarios las mejores herramientas para comprar, vender o rentar propiedades en Chihuahua y sus alrededores, asegurando que cada transacción se realice con total confianza.",
           en: "At UrHomeCUU, we understand that finding the ideal home or selling a property can be a complex and overwhelming process. That's why we've designed a simple and efficient platform that connects owners and buyers quickly and securely. Our goal is to provide our users with the best tools to buy, sell, or rent properties in Chihuahua and its surroundings, ensuring every transaction is carried out with total confidence." },
    tx11: { es: "¿Cómo funciona?", en: "How does it work?" },
    tx12: { es: "1. Busca propiedades: Explora las mejores opciones de compra, venta o renta en tu ciudad.", en: "1. Search for properties: Explore the best buying, selling, or renting options in your city." },
    tx13: { es: "2. Filtra según tus preferencias: Filtra por ubicación, precio y tipo de propiedad.", en: "2. Filter according to your preferences: Filter by location, price, and property type." },
    tx14: { es: "3. Contacta al vendedor o propietario: Con un solo click puedes conectarte directamente con la persona encargada.", en: "3. Contact the seller or owner: With just one click, you can connect directly with the person in charge." },
    tx15: { es: "4. Cierra el trato: Completa el proceso de forma rápida, sencilla y segura.", en: "4. Close the deal: Complete the process quickly, easily, and securely." },
    tx16: { es: "Compañia", en: "Company" },
    tx17: { es: "Acerca de", en: "About" },
    tx18: { es: "Política de privacidad", en: "Privacy Policy" },
    tx19: { es: "Términos y condiciones", en: "Terms and Conditions" },
    tx20: { es: "Contacto", en: "Contact" },
    tx21: { es: "Horario de atención 9am a 6pm.", en: "Customer service hours: 9am to 6pm." },
    tx22: { es: "Redes", en: "Socials" },
    tx23: { es: "Idioma", en: "Languague" },
    tx24: { es: "© 2024 UrHomeCUU, Inc. Todos los derechos reservados.", en: "© 2024 UrHomeCUU, Inc. All rights reserved." }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    Object.keys(translations).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[id][language];
        }
    });
}

// Agregar eventos a los botones
document.getElementById("eng").addEventListener("click", () => {
    const currentLanguage = document.getElementById("tx1").textContent === "Inicio" ? "es" : "en";
    if (currentLanguage !== "en") {
        changeLanguage("en");
    }
});

document.getElementById("esp").addEventListener("click", () => {
    const currentLanguage = document.getElementById("tx1").textContent === "Inicio" ? "es" : "en";
    if (currentLanguage !== "es") {
        changeLanguage("es");
    }
});