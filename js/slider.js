// ---------------------------
// --------- SLIDER ----------
// ------------------------ //
(function ($, undefined) {




    $(document).ready(function(){


        var count = 0;
        var $slides = $('.slide-item');


        var isPrev = false;
        var isNext = false;

        function slideShow() {

            var data = $('.active').attr("data-slide");

            $('.icon-arrow_back').on('click', function () {


                $slides.eq(count).removeClass('active');
                $slides.eq(count-1).addClass('active');



            });


            if (count >= $slides.length) {
                count = 0;
            }
            $slides.eq(count).addClass('active');
            $slides.eq(count-1).removeClass('active');
            count++;





            $('.icon-arrow_forward').on('click', function () {

                isNext = true;

                /*$slides.eq(count).removeClass('active');
                 $slides.eq(count+1).addClass('active');*/

                $slides.eq(count).removeClass('active');
                count = data;
                $slides.eq(data).addClass('active');

                return isNext;
            });



            console.log(count)


        }











        $('.show-slides').on('click', function () {
            $('.slider').slideToggle(250);
            setInterval(slideShow, 2500);
            slideShow();
        });




    });
})(jQuery);

