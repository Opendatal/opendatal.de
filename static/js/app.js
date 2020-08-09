/* Scrolling */

var thescroll = 0;
var scrolling = false;

function scrolleventhandler(e) {
		if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
		  $('.js-body').addClass("is-scrolled");
		} else {
		  $('.js-body').removeClass("is-scrolled");
		}
}//END SCROLL EVENT HANDLER

$(document).ready(function () {
    $(window).scroll(scrolleventhandler);
    $(window).resize(scrolleventhandler);
    $('.js-hamburger').on('click', function() {
        $('.js-header').toggleClass('is-open');
		$('.js-hamburger').toggleClass('is-active');
    });
});

/* Scroll zu allen # hrefs*/
function scrollToId(id) {
    place = $('#' + id);
    if (typeof place != 'undefined') {
        scrollToPlace(place);
    }
}

function scrollToPlace(place) {
    if (typeof place != 'undefined' && typeof place.offset() != 'undefined' && typeof place.offset().top != 'undefined') {
        $('html,body').animate(
            {
                scrollTop: place.offset().top - 95
            },
            {
                duration: 1000
            }
        );
    }
}


$(document).ready(function () {
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        var ahref = $(this).attr('href');
        if (!($(this).hasClass("noscroll"))) {
            ahref = ahref.replace("#", "");
            scrollToId(ahref);
        }

    });
});

