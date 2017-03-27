// ---------------------------
// --------- SLIDER ----------
// ------------------------ //
(function ($, undefined) {


    // BURGER MENU ANIMATION
    $(document).ready(function(){
        var $burgerico = $('#nav-icon3'); // select burger icon
        $burgerico.click(function () { // give burger icon click event
            $burgerico.toggleClass('open'); // toggle menu to x animation
            $('.nav-list-mobile').slideToggle(250);
            // toggle menu (hide and display slide down animation)
        });
    });



    $(document).on('click', '.scroll-btn', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top}, 850);
    });

    $(document).ready(function(){

        var $active = $('.slide-list li.slide1');
        var $next = $active.next();

        $next = $active.addClass('active');


        var slideshow = function () {



        }















        $('.show-slides').on('click', function () {
            $('.slider').slideToggle(250);
            slideshow();
        });

    });
})(jQuery);

