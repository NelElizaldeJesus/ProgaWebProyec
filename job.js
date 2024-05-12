document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll('.contenido-imagenes .imagen');
    let index = 0; // Índice de la imagen actual
    
    function mostrarSiguienteImagen() {
        // Oculta la imagen actual
        imagenes[index].style.opacity = 0;
        
        // Calcula el índice de la siguiente imagen (cíclico)
        index = (index + 1) % imagenes.length;
        
        // Muestra la siguiente imagen
        imagenes[index].style.opacity = 1;
        
        // Programa la siguiente transición después de un intervalo
        setTimeout(mostrarSiguienteImagen, 3000); // Cambia de imagen cada 3 segundos (3000 milisegundos)
    }
    
    // Muestra la primera imagen inicialmente
    imagenes[index].style.opacity = 1;
    
    // Inicia el carrusel de imágenes
    setTimeout(mostrarSiguienteImagen, 3000); // Comienza el carrusel después de 3 segundos (3000 milisegundos)
});


