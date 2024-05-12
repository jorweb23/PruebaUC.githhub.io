document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNav = document.querySelector('.menu-navegacion');
    const segundoMenuToggle = document.querySelector('.segundo-menu-toggle');
    const segundoMenuNav = document.querySelector('.segundo-menu');

    // Función para alternar la visibilidad del primer menú
    menuToggle.addEventListener('click', function() {
        menuNav.classList.toggle('show');
    });

    // Función para alternar la visibilidad del segundo menú
    segundoMenuToggle.addEventListener('click', function() {
        segundoMenuNav.classList.toggle('show');
    });

    // Función para hacer que los botones cambien de color al hacer clic
    const botones = document.querySelectorAll('.boton');
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            boton.classList.toggle('clic');
        });
    });
});