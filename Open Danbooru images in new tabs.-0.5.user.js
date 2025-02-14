// ==UserScript==
// @name         Open Danbooru images in new tabs.
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Opens all images on the current page in new tabs with a button.
// @author       Overlain
// @match        https://danbooru.donmai.us/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Crear el botón / Create the button
    let boton = document.createElement('button');
    boton.innerText = 'Abrir todas las imágenes'; // Texto del botón / Button text

    // Estilo del botón / Button styling
    boton.style.position = 'fixed'; // Posición fija en la pantalla / Fixed position on the screen
    boton.style.bottom = '20px'; // Distancia desde la parte inferior / Distance from the bottom
    boton.style.left = '10px'; // Distancia desde la izquierda / Distance from the left
    boton.style.padding = '8px 16px'; // Relleno interno (más pequeño) / Padding (smaller)
    boton.style.backgroundColor = '#2C3E50'; // Color de fondo oscuro / Dark background color
    boton.style.color = 'white'; // Color del texto / Text color
    boton.style.border = 'none'; // Sin borde / No border
    boton.style.borderRadius = '6px'; // Bordes redondeados / Rounded corners
    boton.style.cursor = 'pointer'; // Cursor en forma de mano / Pointer cursor
    boton.style.fontSize = '14px'; // Tamaño de fuente más pequeño / Smaller font size
    boton.style.fontFamily = "'Poppins', sans-serif"; // Fuente moderna / Modern font
    boton.style.fontWeight = '500'; // Peso de la fuente / Font weight
    boton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Sombra / Shadow
    boton.style.transition = 'background-color 0.3s, transform 0.2s'; // Transición suave / Smooth transition

    // Efecto hover / Hover effect
    boton.addEventListener('mouseenter', () => {
        boton.style.backgroundColor = '#34495E'; // Cambiar color al pasar el ratón / Change color on hover
    });

    boton.addEventListener('mouseleave', () => {
        boton.style.backgroundColor = '#2C3E50'; // Restaurar color original / Restore original color
    });

    // Efecto al hacer clic / Click effect
    boton.addEventListener('mousedown', () => {
        boton.style.transform = 'scale(0.95)'; // Reducir tamaño al hacer clic / Scale down on click
    });

    boton.addEventListener('mouseup', () => {
        boton.style.transform = 'scale(1)'; // Restaurar tamaño al soltar / Restore size on release
    });

    // Función para abrir las imágenes / Function to open images
    boton.onclick = function() {
        // Desactivar el botón temporalmente / Disable the button temporarily
        boton.disabled = true;
        boton.innerText = 'Abriendo imágenes...'; // Cambiar texto del botón / Change button text
        boton.style.backgroundColor = '#888'; // Cambiar color a gris / Change color to gray
        boton.style.cursor = 'not-allowed'; // Cambiar cursor / Change cursor

        // Abrir las imágenes / Open images
        const container = document.querySelector("#posts > div > div.posts-container.gap-2");
        const images = container.querySelectorAll("a.post-preview-link");

        let count = 0; // Contador de imágenes abiertas / Image counter
        for (const image of images) {
            const href = image.getAttribute("href");
            window.open(href, "_blank"); // Abrir en nueva pestaña / Open in new tab
            count++;
        }

        // Mostrar mensaje de confirmación / Show confirmation message
        mostrarToast(`Se abrieron ${count} imágenes en nuevas pestañas.`);

        // Restaurar el botón después de 3 segundos / Restore the button after 3 seconds
        setTimeout(() => {
            boton.disabled = false;
            boton.innerText = 'Abrir todas las imágenes';
            boton.style.backgroundColor = '#2C3E50';
            boton.style.cursor = 'pointer';
        }, 3000);
    };

    // Añadir el botón al cuerpo de la página / Add the button to the page body
    document.body.appendChild(boton);

    // Función para mostrar un mensaje emergente (toast) / Function to show a toast message
    function mostrarToast(mensaje) {
        const toast = document.createElement('div');
        toast.innerText = mensaje; // Texto del mensaje / Message text
        toast.style.position = 'fixed'; // Posición fija / Fixed position
        toast.style.bottom = '70px'; // Distancia desde la parte inferior / Distance from the bottom
        toast.style.left = '10px'; // Distancia desde la izquierda / Distance from the left
        toast.style.padding = '12px 24px'; // Relleno interno / Padding
        toast.style.backgroundColor = '#333'; // Color de fondo / Background color
        toast.style.color = '#fff'; // Color del texto / Text color
        toast.style.borderRadius = '8px'; // Bordes redondeados / Rounded corners
        toast.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Sombra / Shadow
        toast.style.zIndex = '1000'; // Capa superior / Top layer
        toast.style.transition = 'opacity 0.3s'; // Transición suave / Smooth transition
        toast.style.opacity = '0'; // Inicialmente invisible / Initially invisible
        toast.style.fontFamily = "'Poppins', sans-serif"; // Fuente moderna / Modern font
        toast.style.fontSize = '14px'; // Tamaño de fuente / Font size

        document.body.appendChild(toast); // Añadir el toast al cuerpo / Add toast to the body

        // Mostrar el toast / Show the toast
        setTimeout(() => {
            toast.style.opacity = '1'; // Hacer visible / Make visible
        }, 10);

        // Ocultar el toast después de 3 segundos / Hide the toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0'; // Hacer invisible / Make invisible
            setTimeout(() => {
                toast.remove(); // Eliminar el toast / Remove the toast
            }, 300);
        }, 3000);
    }

    // Añadir la fuente Poppins desde Google Fonts / Add Poppins font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link); // Añadir el enlace al head / Add link to the head
})();