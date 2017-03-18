$(document).on('click', '.scroll-btn', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 850);
});


    $(window).on('load', (function() {
        var mainPoint = $("#main").offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= mainPoint) {
                $('.home-menu').fadeIn(100);
            } else {
                $('.home-menu').fadeOut(100);
            }
        });
     }));

