$(window).scroll(function() {
    var nav = $('#navbarMain');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('fixed');

    } else {
        nav.removeClass('fixed');
    }
});

