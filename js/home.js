
(function ($, undefined) {


    $(document).ready(function() {

        $(window).scroll(function() {
            var mainOff = $('#main').offset().top;
            if ($(this).scrollTop() >= mainOff) {
                $('.home-menu').fadeIn(50);
            } else {
                $('.home-menu').fadeOut(50);
            }

            $(".header-title").css("opacity", 1 - $(window).scrollTop() / 300);
            $(".slider-nav").css("opacity", 1 - $(window).scrollTop() / 300);
            /*console.log($(window).scrollTop() / 300)*/
        });
    });




    // ------------------------------------
    // -------------- SLIDER --------------
    // ------------------------------------

    $(document).ready(function(){

        var $herobg = $('.parallax-home');

        var $slidelink = $('.slide-link');


        $slidelink.each(function () {
            $(this).on('mouseenter', function () {
                $(this).prev('div').fadeIn(450);
            });
            $(this).on('mouseleave', function () {
                $(this).prev('div').fadeOut(450);
            });

        })



        $herobg.css('background-image', 'url(imgs/bgclothesblur.jpg)');
        var count = 0;
        var speed = 3500;
        var imgurl = ['url(imgs/mistertny.jpg)', 'url(imgs/madametny.jpg)', 'url(imgs/jewelrytny.jpg)', 'url(imgs/bgclothesblur.jpg)'];




        $('.prev-link').on('click', function () {
            reset();
            if (count === 1) {
                count = imgurl.length;
            } else {
                count--;
            }
            $herobg.css('background-image', imgurl[count-1]);
        });

        $('.next-link').on('click', function() {
            reset();
            if (count === imgurl.length) {
                count = 0;
            }
            countNext();
        });


        var slideInt = setInterval(countNext, speed)

       

        function countNext() {
            if(count >= imgurl.length) {
                count = 0;
            }
            changeSlide();
            count++;
            console.log(count)
        }


        var changeSlide = function() {
            $herobg.css('background-image', imgurl[count]);
        }
        function reset() {
            clearInterval(slideInt);
            slideInt = setInterval(countNext, speed);

        }

    });




    // ------------------------------------
    // --------- FORM VALIDATION ----------
    // ------------------------------------
    $(document).ready(function(){

        $('#myform').on('submit', function (_e) {


            $(document).find('span.errormsg').remove();
            $(document).find('span.icon-check').remove();





            var $adderrorspan = function (_p) {
                $createspan = $('<span class="errormsg"></span>');
               _p.append($createspan);
           }
           /* var $add_check = function (_z) {
                $createcheck = $('<span class="icon-check"></span>');
                _z.append($createcheck);
            }*/




            //  RADIO BUTTONS
            var $radiocnt = $('.radiobtn-cnt');

            if($radiocnt.find('input[type="radio"]:checked').length <= 0 ) {
                /*$radiocnt.find('span').addClass('error');*/
                $adderrorspan($radiocnt);
                $createspan.text('*Please select your gender');
            }



            
            // NAME
            var $namecnt = $('.name-cnt');
            var $name = $('#name');

            if($name.val().trim() === "") {
                $adderrorspan($namecnt);
                $createspan.text('*Please fill in your name');

            }
            for (var i = 0; i < $name.val().length; i++) {
                var validname = " +/0123456789!§$%&/()=?_:;";

                var z = $name.val().charAt(i);

                if (validname.indexOf(z) > -1) {
                    $adderrorspan($namecnt);
                    $createspan.text('*Please fill in a valid name with only letters from A-Z');

                }
            }



            // LASTNAME

            var $lastnamecnt = $('.lastname-cnt');
            var $lastname = $('#lastname');

            if($lastname.val().trim() === "") {
                $adderrorspan($lastnamecnt);
                $createspan.text('*Please fill in your last name');

            }
            for (var i = 0; i < $lastname.val().length; i++) {
                var validlastname = " +/0123456789!§$%&/()=?_:;";

                var z = $lastname.val().charAt(i);

                if (validlastname.indexOf(z) > -1) {
                    $adderrorspan($lastnamecnt);
                    $createspan.text('*Please fill in a valid last name with only letters from A-Z');
                }
            }



            // EMAIL
            var $mailcnt = $('.mail-cnt');
            var $email = $('#mail')
            if($email.val().trim() === "" || $email.val().indexOf('@') < 1) {
                /*add_error();*/
                $adderrorspan($mailcnt);
                $createspan.text('*Please fill in your e-mail');
            }


            // PHONE



            var $phonecnt = $('.phone-cnt');
            var $phone = $('#phone');

            if($phone.val().trim() === "") {
                $adderrorspan($phonecnt);
                $createspan.text('*Please fill in your phone number');

            }

            for (var i = 0; i < $phone.val().length; i++) {
                var validphone = " +-/0123456789";

                var z = $phone.val().charAt(i);

                 if (validphone.indexOf(z) === -1 || z === '+' && i > 0) {
                    $adderrorspan($phonecnt);
                    $createspan.text('*Please fill in a valid phone number with only digits and if needed, a "+" as the first character');

                }
            }




            // CHECKBOX
            var $agbcnt = $('.agb-check-cnt');
            if($agbcnt.find('input:checked').length <= 0) {
                /*add_error();*/
                $adderrorspan($agbcnt);
                $createspan.text('*Please agree to the AGB');
            }





            _e.preventDefault();
        });
    });















})(jQuery);



