
# Script: Abrir imágenes de Danbooru con Estilo

## Descripción / Description

### Español:

Este script añade un botón en la esquina inferior izquierda de la página de Danbooru. Al hacer clic en él, se abren todas las imágenes de la página en nuevas pestañas. El botón tiene un diseño moderno, con efectos de hover y clic, y muestra un mensaje emergente (toast) que indica cuántas imágenes se han abierto. Además, el botón se desactiva temporalmente después de hacer clic para evitar múltiples clics accidentales.

**Advertencia:** Abrir muchas pestañas a la vez puede consumir una cantidad significativa de recursos del sistema (memoria RAM y CPU). Se recomienda usarlo con moderación en páginas con muchas imágenes.

### English:

This script adds a button to the bottom-left corner of the Danbooru page. When clicked, it opens all images on the page in new tabs. The button has a modern design, with hover and click effects, and displays a toast message indicating how many images were opened. Additionally, the button is temporarily disabled after clicking to prevent accidental multiple clicks.

**Warning:** Opening many tabs at once can consume a significant amount of system resources (RAM and CPU). It is recommended to use it sparingly on pages with many images.

----------

## Instrucciones para Modificar / Instructions for Modifying

### Español:

1.  **Cambiar el texto del botón:** Modifica la línea `boton.innerText = 'Abrir todas las imágenes';` para cambiar el texto que aparece en el botón.
    
2.  **Cambiar el color del botón:** Ajusta los valores de `backgroundColor` en las líneas donde se define el estilo del botón.
    
3.  **Cambiar la fuente:** Si prefieres otra fuente, modifica la línea `boton.style.fontFamily` y actualiza el enlace de Google Fonts en la parte inferior del script.
    
4.  **Ajustar el tiempo del toast:** Cambia el valor de `3000` en las funciones `setTimeout` para ajustar cuánto tiempo se muestra el mensaje emergente.
    

### English:

1.  **Change the button text:** Modify the line `boton.innerText = 'Abrir todas las imágenes';` to change the text displayed on the button.
    
2.  **Change the button color:** Adjust the `backgroundColor` values in the lines where the button style is defined.
    
3.  **Change the font:** If you prefer a different font, modify the line `boton.style.fontFamily` and update the Google Fonts link at the bottom of the script.
    
4.  **Adjust the toast duration:** Change the value of `3000` in the `setTimeout` functions to adjust how long the toast message is displayed.
    

----------

## Ejemplo de Uso / Example Usage

### Español:

1.  Instala el script en [Tampermonkey](https://www.tampermonkey.net/) o [Greasemonkey](https://www.greasespot.net/).
    
2.  Navega a una página de Danbooru con imágenes.
    
3.  Haz clic en el botón **"Abrir todas las imágenes"** en la esquina inferior izquierda.
    
4.  Todas las imágenes se abrirán en nuevas pestañas, y verás un mensaje emergente que indica cuántas imágenes se han abierto.
    

**Nota:** Si la página tiene muchas imágenes, es posible que tu navegador se vuelva lento o no responda temporalmente debido al alto consumo de recursos.

### English:

1.  Install the script in [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/).
    
2.  Navigate to a Danbooru page with images.
    
3.  Click the **"Abrir todas las imágenes"** button in the bottom-left corner.
    
4.  All images will open in new tabs, and you'll see a toast message indicating how many images were opened.
    

**Note:** If the page has many images, your browser may become slow or unresponsive temporarily due to high resource usage.

----------

## Advertencia / Warning

### Español:

⚠️ **Atención:** Este script abre todas las imágenes de la página en nuevas pestañas. Si la página contiene muchas imágenes, esto puede consumir una gran cantidad de memoria RAM y CPU, lo que podría ralentizar o bloquear temporalmente tu navegador. Se recomienda usarlo con precaución en páginas con un número elevado de imágenes.

### English:

⚠️ **Warning:** This script opens all images on the page in new tabs. If the page contains many images, this can consume a large amount of RAM and CPU, which may slow down or temporarily freeze your browser. It is recommended to use it cautiously on pages with a high number of images.
