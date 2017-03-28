
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








    // ------------------------------------
    // --------- FORM VALIDATION ----------
    // --------------------------------- //
    $(document).ready(function(){

        $('#myform').on('submit', function (_e) {


            $(document).find('span.errormsg').remove();
            $(document).find('span.icon-check').remove();





            var $adderrorspan = function (_p) {
                $createspan = $('<span class="errormsg"></span>');
               _p.append($createspan);
           }




            //  RADIO BUTTONS
            var $radiocnt = $('.radiobtn-cnt');

            if($radiocnt.find('input[type="radio"]:checked').length <= 0 ) {
                /*$radiocnt.find('span').addClass('error');*/
                $adderrorspan($radiocnt);
                $createspan.text('*Please select your gender');
            } else {
                $adderrorspan($radiocnt);
                $radiocnt.find('span.errormsg').addClass('icon-check completeerror');
            }



            
            // NAME
            var $namecnt = $('.name-cnt');
            if($('#name').val().trim() === "") {
                $adderrorspan($namecnt);
                $createspan.text('*Please fill in your name');

            } else {
                $adderrorspan($namecnt);
                $namecnt.find('span.errormsg').addClass('icon-check completeerror');
            }



            // LASTNAME
            var validlastname = " +/0123456789!=?_.,#";


            var $lastnamecnt = $('.lastname-cnt');
            var $lastname = $('#lastname');

           /* for(var i = 0; i < $lastname.val().length; i++) {
                var z = $lastname.val().charAt(i);

                if (validlastname.indexOf(z) > 0) {
                    $adderrorspan($lastnamecnt);
                    $createspan.text('*Please fill in a valid last name. No special characters allowed');
                } else {
                    $adderrorspan($lastnamecnt);
                    $lastnamecnt.find('span.errormsg').addClass('icon-check completeerror');
                }

            }*/

            if($lastname.val().trim() === "") {
                $adderrorspan($lastnamecnt);
                $createspan.text('*Please fill in your last name');

            } else if ($lastname.val()) {
                $adderrorspan($lastnamecnt);
                $lastnamecnt.find('span.errormsg').addClass('icon-check completeerror');
            }



            // EMAIL
            var $mailcnt = $('.mail-cnt');
            var $email = $('#mail')
            if($email.val().trim() === "" || $email.val().indexOf('@') < 1) {
                /*add_error();*/
                $adderrorspan($mailcnt);
                $createspan.text('*Please fill in your e-mail');
            } else {
                $adderrorspan($mailcnt);
                $mailcnt.find('span.errormsg').addClass('icon-check completeerror');
            }


            // PHONE
            var validphone = " +-/0123456789";

            var $phonecnt = $('.phone-cnt');
            var $phone = $('#phone');
            if($phone.val().trim() === "") {
                $adderrorspan($phonecnt);
                $createspan.text('*Please fill in your phone number');

            } else if ($phone.val()) {
                for(var i = 0; i < $phone.val().length; i++) {

                    var z = $phone.val().charAt(i);

                    if(z === '+' && i > 0 || validphone.indexOf(z) === -1) {
                        $adderrorspan($phonecnt);
                        $createspan.text('*Please fill in a valid phone number with only digits and if needed, a "+" as the first character');
                    } else {
                        $adderrorspan($phonecnt);
                        $phonecnt.find('span.errormsg').addClass('icon-check completeerror');
                    }
                }
            }







            // CHECKBOX
            var $agbcnt = $('.agb-check-cnt');
            if($agbcnt.find('input:checked').length <= 0) {
                /*add_error();*/
                $adderrorspan($agbcnt);
                $createspan.text('*Please agree to the AGB');
            } else {
                $adderrorspan($agbcnt);
                $agbcnt.find('span.errormsg').addClass('icon-check completeerror');
            }





            _e.preventDefault();
        });
    });















})(jQuery);



