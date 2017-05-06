// ----------------------------
// --------- GALLERY ----------
// ------------------------- //
(function ($, undefined) {


    $(document).ready(function () {


        // alle UL's selektieren
        var $list = $('.collection-gallery');
        // alle anchors in der UL finden und selektieren
        var $list_links = $list.find('a');

        var $opengallery = function (_e) { // Funktion für Gallerie

            // geklickten acnhor ausgeben welcher die gallerie öffnet
            console.log($(this));

            // normales Verhalten von anchor vermeiden
            _e.preventDefault();

            // Overlay der Gallerie erzeugen und als variable speichern
            var $gallerybox = $('<div class="gallery-box">\
			<div class="gallery-exit">\
			    <span class="exit-txt">close</span>\
			</div>\
			<div class="gallery-img-cnt">\
			</div>\
			<div class="gallery-nav">\
			    <span class="icon-arrow_back nav-arrow"></span>\
				<span class="icon-arrow_forward nav-arrow"></span>\
			</div>\
		</div>');


            // close-button finden und click event hinzufügen
            $gallerybox.find('.exit-txt').on('click', function () {
                $gallerybox.remove();
                // auf Click ganzes Overlay schließen

            });

            // img erzeugen für großes Bild welches als Tumbnail auf der Seite angeklickt wird
            // $(this).attr('href') -> pfad zum Image aus dem geklickten Link auslesen
            var $img = $('<img src="' + $(this).attr('href') + '">');

            // erzeugtes img in div für großes Bild anhängen
            $gallerybox.find('.gallery-img-cnt').append($img);
            console.log($img); // 'aktives' Bild ausgeben (großes Bild)


            // span mit Bildtitel erzeugen und nach großem Bild einfügen
            // text kommt aus dem title Attribut des anchors
            $img.after('<span class="galleryimg-title">' + $(this).attr('title') + '</span>');
            console.log($('span.galleryimg-title') + 'span');

            // Tumbnailliste aus der Webseite klonen und nach dem prev-button einfügen
            $gallerybox.find('.icon-arrow_back').after($(this).closest('.collection-gallery').clone());


            // anchor finden (gleiches href attribut wie großes Bild)
            // und closest li finden (li in dem der acnhor ist) und dem li
            // die Klasse geben
            $gallerybox.find('.collection-gallery a[href="' + $(this).attr('href') + '"]').closest('li').addClass('selected');



            // alle anchors in Thumbnailliste im Overlay selektieren und click
            // Event geben
            $gallerybox.find('.collection-gallery a').on('click', function (_e) {

                // normales verhalten verhindern (verhindern das Link aufgerufen wird)
                _e.preventDefault();


                // die klasse selected überall entfernen
                $gallerybox.find('.collection-gallery li.selected').removeClass('selected');

                // dem geklicktem thumbnail wieder die klasse selected geben
                $(this).closest('li').addClass('selected');


                // das href des angeklickten anchors in das src attribut des großen img
                // einfügen
                $gallerybox.find('.gallery-img-cnt img').attr('src', $(this).attr('href'));

                // title attribut des angeklickten anchors als text in das span schreiben
                $gallerybox.find('.gallery-img-cnt .galleryimg-title').text($(this).attr('title'));

            });


            // click event für next button
            $gallerybox.find('.icon-arrow_forward').on('click', function () {

                // das Thumbnail rechts vom aktuell selektiertem finden und in
                // variable speichern
                var $next = $gallerybox.find('.collection-gallery li.selected').next();

                // wenn es rechts noch eines gibt
                if ($next.length) {
                    // click event auf dem nächsten anchor triggern
                    $next.find('a').trigger('click');
                } else {
                    // wenn keines daneben - dann click event auf dem ersten auslösen
                    $gallerybox.find('a').first().trigger('click');
                }
            });


            // click event für prev button
            $gallerybox.find('.icon-arrow_back').on('click', function () {

                // das Thumbnail links vom aktuell selektiertem finden und in
                // variable speichern
                var $prev = $gallerybox.find('.collection-gallery li.selected').prev();

                // wenn es rechts noch eines gibt
                if ($prev.length) {
                    // click event auf dem vorherigen anchor triggern
                    $prev.find('a').trigger('click');
                } else {
                    // wenn keines daneben - dann click event auf dem letzten auslösen
                    $gallerybox.find('a').last().trigger('click');
                }
            });


            //Overlay ins DOM einhängen
            $('body').prepend($gallerybox);
            $gallerybox.animate({opacity: 1},75);

        }


        // allen anchors in der liste ein click event geben welches die Funktion aufruft
        $list_links.on('click', $opengallery);


    });
})(jQuery);

