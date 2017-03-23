
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

    // BURGER MENU ANIMATION
    $(document).ready(function(){
        var $burgerico = $('#nav-icon3'); // select burger icon
        $burgerico.click(function () { // give burger icon click event
            $burgerico.toggleClass('open'); // toggle menu to x animation
            $('.nav-list-mobile').slideToggle(250);
            // toggle menu (hide and display slide down animation)
        });
    });


    // CLOTHES SLIDER
    $(document).ready(function(){
        var $showslide = $('.show-slides');
        var $slider = $('.slider');


        var $slideSwitch = function() {


            var $active = $('.slide-list li.active');
            var $next = $active.next();

            console.log($active)

                if($active.length > 0) {
                    $next.addClass('active');
                    $active.removeClass('active');
                } else {
                    $('.slide-list li').first().addClass('active');
                }


        }

        var $slideshow = function() {
            setInterval($slideSwitch, 2500);
        };


        $showslide.on('click', function () {
            $slider.slideToggle(250);
            $slideshow();

        });

    });





    $(document).ready(function(){

        $('#myform').on('submit', function (_e) {


            var $errormsg = $('<span></span>');
            var $errorcnt = $('.error-cnt');


            if($('#name').val().trim() === "") {
                $errorcnt.prepend($errormsg.textContent="Pflichtfeld");
            }










            _e.preventDefault();






        });






    });











})(jQuery);



