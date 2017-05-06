(function ($, undefined) {

    // BURGER MENU ANIMATION
    $(document).ready(function(){
        var $burgerico = $('#nav-icon3'); // select burger icon
        $burgerico.on('click', function () { // add click Event listener to icon
            $burgerico.toggleClass('open'); // toggle menu to X (close) animation
            $('.nav-list-mobile').slideToggle(250);
            // toggle menu (hide and display slide down animation)
        });

        $($('.nav-list-mobile .dropdown')).one('click', function (_e) {
            _e.preventDefault();
            var $dropdown_height = $('.mobile-dropdown li').height() * 3;
            var $li_height = $(this).height();
            console.log($li_height);
            $($('.nav-mobile-item.dropdown')).animate({
                height: $li_height + $dropdown_height
            });
            $('.nav-list-mobile .dropdown .mobile-dropdown').slideDown();
        })
    });

})(jQuery);