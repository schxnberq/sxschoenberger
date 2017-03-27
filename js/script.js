
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
            $('#myform .error').removeClass('error');



           var $adderrorspan = function (event) {
               $createspan = $('<span class="errormsg"></span>');
               event.append($createspan);
           }




            //  RADIO BUTTONS
            var $radiocnt = $('.radiobtn-cnt');

            if($radiocnt.find('input[type="radio"]:checked').length <= 0 ) {
                /*$radiocnt.find('span').addClass('error');*/
                $adderrorspan($radiocnt);
                $radiocnt.find('span.errormsg').text('*Please select your gender');
            } else {
                $adderrorspan($radiocnt);
                $radiocnt.find('span.errormsg').addClass('icon-check completeerror');
            }


            // TITLE
            if($('.title-drpdwn option[value="choose"]:checked')) {
                $adderrorspan($('.form-title'));
                $('.form-title').find('span.errormsg').text('*Please select your title');
            } else {
                $adderrorspan($('.form-title'));
                $('.form-title').find('span.errormsg').addClass('icon-check completeerror');
            }

            
            // NAME
            var $namecnt = $('.name-cnt');
            if($('#name').val().trim() === "") {
                /*add_error();*/
                $adderrorspan($namecnt);
                $namecnt.find('span.errormsg').text('*Please fill in your name');
            } else {
                $adderrorspan($namecnt);
                $namecnt.find('span.errormsg').addClass('icon-check completeerror');
            }


            // LASTNAME
            var $lastnamecnt = $('.lastname-cnt');
            if($('#lastname').val().trim() === "") {
                /*add_error();*/
                $adderrorspan($lastnamecnt);
                $lastnamecnt.find('span.errormsg').text('*Please fill in your name');
            } else {
                $adderrorspan($lastnamecnt);
                $lastnamecnt.find('span.errormsg').addClass('icon-check completeerror');
            }

            // EMAIL
            var $mailcnt = $('.mail-cnt');
            var $email = $('#mail')
            if($email.val().trim() === "" || $email.val().indexOf('@') < 1) {
                /*add_error();*/
                $adderrorspan($mailcnt);
                $mailcnt.find('span.errormsg').text('*Please fill in your name');
            } else {
                $adderrorspan($mailcnt);
                $mailcnt.find('span.errormsg').addClass('icon-check completeerror');
            }

            // PHONE
            var $phonecnt = $('.phone-cnt');
            var $phone = $('#phone');
            if($phone.val().trim() === "") {
                /*add_error();*/
                $adderrorspan($phonecnt);
                $createspan.text('*Please fill in your phone number');
            } else {
                $adderrorspan($phonecnt);
                $phonecnt.find('span.errormsg').addClass('icon-check completeerror');
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



