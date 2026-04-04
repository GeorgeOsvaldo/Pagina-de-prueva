// Archivo JavaScript principal / Main JavaScript file
// Aquí puedes añadir código JavaScript para interactividad / Here you can add JavaScript code for interactivity
// Por ejemplo, eventos para el menú o animaciones / For example, events for the menu or animations
console.log("Hello, World!") // Mensaje de prueba en la consola / Test message in the consola

document.querySelector(".menu-btn").addEventListener("click", () => { // Agrega un evento de clic al botón del menú / Add a click event to the menu button
    document.querySelector(".nav-menu").classList.toggle("show"); // Alterna la clase "show" para mostrar el menú / Toggle la clase "show" para display the menu
})

// Inicializa ScrollReveal cuando el DOM esté listo / Initialize ScrollReveal when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const sr = ScrollReveal({ // Crea instancia de ScrollReveal / Create ScrollReveal instance
        origin: 'bottom', // Origen de la animación desde abajo / Animation origin from bottom
        distance: '40px', // Distancia de desplazamiento / Displacement distance
        duration: 800, // Duración de la animación en ms / Animation duration in ms
        easing: 'ease-in-out', // Tipo de easing / Easing type
        reset: false, // No repetir animación al volver a scroll / Do not repeat animation on scroll back
    });

    sr.reveal('.showcase'); // Revela el elemento showcase / Reveal the showcase element
    sr.reveal('.new-cards', { delay: 300 }); // Revela las tarjetas de noticias con retraso / Reveal news cards with delay
    sr.reveal('.cards-banner-one', { delay: 300 }); // Revela el banner uno con retraso / Reveal banner one with delay
    sr.reveal('.cards-banner-two', { delay: 300 }); // Revela el banner dos con retraso / Reveal banner two with delay
});