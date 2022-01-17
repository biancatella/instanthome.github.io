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
    // $(window).on('resize scroll', function() {
    //     if ($('.highlight-text').isInViewport()) {
    //         $(".highlight-text").addClass('animate');
    //     }
    // });



    $('body').on('DOMMouseScroll mousewheel', function(event) {
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
            //scroll down
            $(".highlight-text").addClass('animate');
        } else {
            //scroll up
            $(".highlight-text").removeClass('animate');
        }
        return;
    });


    //             $(".navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
    //             $(".navbar").css({ "background-color": "transparent" });


});


function expandedMobile() {
    $(".navbar-nav").css({ "right": "0" });
}

function collapseMobile() {
    $(".navbar-nav").css({ "right": "-90%" });
}