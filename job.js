
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const adelante = document.getElementById('boton-delante');
    const atras = document.getElementById('boton-atras');
    let seccionActual = 0;
    const secciones = document.querySelectorAll('.slider-seccion');
    const numeroSecciones = secciones.length;

    adelante.addEventListener('click', () => {
        seccionActual = (seccionActual + 1) % numeroSecciones;
        actualizarCarrusel();
    });

    atras.addEventListener('click', () => {
        seccionActual = (seccionActual - 1 + numeroSecciones) % numeroSecciones;
        actualizarCarrusel();
    });

    function actualizarCarrusel() {
        const desplazamiento = -seccionActual * 100; // 100% es el ancho de cada imagen
        secciones.forEach((seccion) => {
            seccion.style.transform = `translateX(${desplazamiento}%)`;
        });
    }
});
