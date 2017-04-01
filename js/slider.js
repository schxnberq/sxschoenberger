// ---------------------------
// --------- SLIDER ----------
// ------------------------ //
(function ($, undefined) {




    $(document).ready(function(){


        var slideIndex = -1;
        var $slides = $('.slide-item');



        function slideShow() {








            slideIndex++;

            if (slideIndex >= $slides.length) {
                slideIndex = 0;
            }

            $('.icon-arrow_back').on('click', function () {

                var data = $('.active').attr("data-slide");

                data = data - 1;


            });
            console.log(slideIndex);




            $slides.eq(slideIndex).addClass('active');
            $slides.eq(slideIndex-1).removeClass('active');
            setTimeout(slideShow, 2500);



        }











        $('.show-slides').on('click', function () {
            $('.slider').slideToggle(250);
            slideShow();
        });




    });
})(jQuery);

