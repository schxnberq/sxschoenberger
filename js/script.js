
(function ($, undefined) {

    $(document).on('click', '.scroll-btn', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top}, 850);
    });


    $(document).ready(function() {
        var mainPoint = $("#main").offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= mainPoint) {
                $('.home-menu').fadeIn(100);
            } else {
                $('.home-menu').fadeOut(100);
            }
        });
    });
    
   /* $(document).ready(function () {
        $('.icon-menu').on('click', function () {
            $('.nav-list-mobile').slideToggle(250);
        })
    });*/


    $(document).ready(function(){
        var $burgerico = $('#nav-icon3');
        $burgerico.click(function(){
            $burgerico.toggleClass('open');
            $('.nav-list-mobile').slideToggle(250);
        });
    });











})(jQuery);



