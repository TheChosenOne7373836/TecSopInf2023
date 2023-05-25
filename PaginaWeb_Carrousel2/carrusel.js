function activarMiCarousel(idCarrusel, intervalo) {
    var carousel = $('#' + idCarrusel);
    var imagen = carousel.find('img');
    var actual = 0;

    function showNextImage() {
        imagen.eq(actual).fadeOut();
        actual = (actual + 1) % imagen.length;
        imagen.eq(actual).fadeIn();
    }

    setInterval(showNextImage, intervalo);
}