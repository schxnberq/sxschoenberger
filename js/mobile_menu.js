(function ($, undefined) {

    // BURGER MENU ANIMATION
    $(document).ready(function(){
        var $burgerico = $('#nav-icon3'); // icon selektieren
        $burgerico.on('click', function () { // click event an icon binden
            // klasse hinzufügen welche burger icon zu 'X' animiert
            $burgerico.toggleClass('open');
            $('.nav-list-mobile').slideToggle(250);
            // mobile-nav menu auf klick ein oder ausblenden (slideDown & slideUp effekt)
        });

        // Dropdown für mobile ansicht / statt '.on' '.one'.
        // - > Beim ersten click auf 'collections' soll das dropdown erscheinen
        // Bei zweitem click wieder normal die Collections seite erscheinen
        $($('.nav-list-mobile .dropdown')).one('click', function (_e) {

            // normalen link verhindern (nur beim ersten klick)
            _e.preventDefault();

            // height des dropdown menus in eine Variable speichern
            var $dropdown_height = $('.mobile-dropdown').height();

            // height der collections li im normalen menu in eine variable speichern
            // $(this) -> referenz auf das element welches oben click event
            // erhalten hat
            var $li_height = $(this).height();

            // $(this) -> wieder referenz auf die collections li
            // height der collections li soll so hoch animiert werden
            // das sich das ganze Dropdown menu in der height der
            // collections li ausgeht
            // also: height der collections li ($li_height) + height vom Dropdown
            // menu ($dropdown_height) + 10 für 'padding' bzw. damit das dropdown nicht ganz unten hängt
            $(this).animate({
                height: $li_height + $dropdown_height + 10
            });

            // und noch das eigentliche dropdown menu einblenden mit slideDown()
            // $(this) -> wieder referenz auf die collections li dann dropdown menu
            // selektieren und slideDown() method hinzufügen
            $(this).find('.mobile-dropdown').slideDown();
        })
    });

})(jQuery);