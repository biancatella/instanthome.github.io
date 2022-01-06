$(document).ready(function() {

    // SCROLL CHANGES MENU DESKTOP//
    if (window.matchMedia('(min-width: 770px)').matches) {
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $(".navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
                $(".navbar").addClass('header--scroll');
                //colcoar imagem de logo escura
                // $('.header--menu').css({ "display": "none" });
            }

            if ($(window).scrollTop() < 100) {
                $(".navbar").css({ "background-color": "transparent" });
                $(".navbar").removeClass('header--scroll');
            }
        })
    }

});