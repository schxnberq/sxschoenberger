(function ($, undefined) {

    $('.scroll-btn').on('click', function(_a){
        _a.preventDefault();
        var mainOff = $('#main').offset().top;
        console.log(mainOff)
        $('body').animate({scrollTop: mainOff}, 800);
    });

    // BURGER MENU ANIMATION
    $(document).ready(function(){
        var $burgerico = $('#nav-icon3'); // select burger icon
        $burgerico.on('click', function () { // give burger icon click event
            $burgerico.toggleClass('open'); // toggle menu to x animation
            $('.nav-list-mobile').slideToggle(250);
            // toggle menu (hide and display slide down animation)
        });
    });

})(jQuery);