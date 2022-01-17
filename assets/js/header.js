$(document).ready(function() {

    //CHECK IF THE ELEMENT IS VISIBLE ON VIEWPORT
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    //HIGHLIGT ANIMATION
    $(window).on('resize scroll', function() {
        if ($('.highlight-text').isInViewport()) {
            $(".highlight-text").addClass('animate');
        }
    });








    // if (window.matchMedia('(min-width: 770px)').matches) {
    //     $(window).scroll(function() {

    //         if ($(window).scrollTop() > 100) {
    //             console.log('scroll down');
    //             // $(".navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
    //             $(".highlight-text").addClass('animate');

    //         }

    //         if ($(window).scrollTop() < 100) {
    //             console.log('scroll up');
    //             // $(".navbar").css({ "background-color": "transparent" });
    //             $(".highlight-text").removeClass('animate');
    //         }
    //     })
    // }


    // SCROLL CHANGES MENU DESKTOP//
    // if (window.matchMedia('(min-width: 770px)').matches) {
    //     $(window).scroll(function() {

    //         if ($(window).scrollTop() > 100) {
    //             $(".navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
    //             $(".navbar").addClass('header--scroll');

    //         }

    //         if ($(window).scrollTop() < 100) {
    //             $(".navbar").css({ "background-color": "transparent" });
    //             $(".navbar").removeClass('header--scroll');
    //         }
    //     })
    // }

});


function expandedMobile() {
    $(".navbar-nav").css({ "right": "0" });
}

function collapseMobile() {
    $(".navbar-nav").css({ "right": "-90%" });
}