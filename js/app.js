$(document).ready(function () {


    //Click en elementos para desplazarme a la sección

    var inicio = $('#inicio').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    $('#btn-inicio').on('click', function () {
        $('html, body').animate({
            'scrollTop': inicio
        },1500)
    });

    $('#btn-galeria').on('click', function () {
        $('html, body').animate({
            'scrollTop': galeria 
        }, 1500)
    });

    $('#btn-ubicacion').on('click', function () {
        $('html, body').animate({
            'scrollTop': ubicacion
        }, 1500)
    });
});