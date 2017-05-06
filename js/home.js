(function ($, undefined) {

    $(document).ready(function () {


        var mainTopOff = $('#main').offset().top;
        // offset-top von main speichern

        // --------------------------------
        // SCROLL ANIMATION für HOME Header
        // --------------------------------

        // CLICK EVENT AUF DEN BUTTON
        $('.scroll-btn').on('click', function (_a) {
            _a.preventDefault(); // normales Verhalten verhindern
            console.log(mainTopOff) // gibt offset (mainTopOff) als integer aus
            $('html, body').animate({scrollTop: mainTopOff}, 800);
            // scrollTop von html & body bis zu <main> (mainTopOff) animieren
        });


        // --------------------------------
        //   NAV Menu ein und ausblenden
        //               &
        // opacity von 2 HEADER Elementen on scroll animieren
        // --------------------------------
        $(window).scroll(function () { // wird alles auf scrollen getriggered

            // WENN scrollTop von window($(this))  IST größer/gleich mainTopOff
            // - (offset-top von <main>) DANN NAV Menu einblenden
            // ELSE (WENN NICHT) -  DANN ausblenden

            // kurz: wenn scroll position den <main> 'punkt' erreicht NAV Menu  einblenden
            if ($(this).scrollTop() >= mainTopOff) {
                $('.home-menu').fadeIn(50);
            } else {
                $('.home-menu').fadeOut(50);
            }

            // opacity von 2 Elementen im HEADER mit scroll animieren
            // scrollTop Wert durch 300 dividieren damit die animation länger dauert
            // d.h opacity: 1 minus dem Wert window scrollTop / 300
            $(".header-title").css("opacity", 1 - $(window).scrollTop() / 300);
            $(".slider-nav").css("opacity", 1 - $(window).scrollTop() / 300);
            // gibt den opacity Wert mit scroll aus (opacity: 1; -> immer weniger mit scroll)
            console.log(1 - $(window).scrollTop() / 300);
        });
    });


    // ------------------------------------
    // -------------- SLIDER --------------
    // ------------------------------------

    $(document).ready(function () {

        var $herobg = $('.parallax-home'); // HTML Container mit dem Background-Image selektieren



        // count geht Bilder im Array durch
        // auf 4 damit das letzte als erstes erscheint
        // ausgangsbild = 4. Bild im Array
        var count = 4;


        var speed = 3500; // speed für interval dauer (3.5s bis zum nächsten Bild)

        // alle URLs in ein Array speichern
        var imgurl = ['url(imgs/mistertny.jpg)', 'url(imgs/madametny.jpg)', 'url(imgs/jewelrytny.jpg)', 'url(imgs/bgclothesblurtny.jpg)'];

        // picture Element quasi 'ersetzen' = auf kleineren Screen kleinere Bilder
        // ausgangsbild als letztes damit es nicht 2 mal am anfang kommt
        if ($(window).innerWidth() <= 1024) {
            imgurl = ['url(imgs/mistertny_2.jpg)', 'url(imgs/madametny_2.jpg)', 'url(imgs/jewelrytny_2.jpg)', 'url(imgs/bgclothesblurtny_2.jpg)'];
        };


        var changeSlide = function () {
            $herobg.css('background-image', imgurl[count]);
            // nimmt aktuellen count und setzt jeweilige url im Array an der stelle count
        }

        var resetInt = function () {
            // wird bei prev und next Buttons aufgerufen
            // (interval zurücksetzen und dann wieder neu setzten)
            clearInterval(slideInt);
            slideInt = setInterval(countNext, speed);
        }

        var countNext = function () { // autoplay funktion
            // wenn count ist größer/gleich imgurl.length (=4) dann count auf -1
            // -1 deswegen weil danach count + 1 zählt und damit count auf 0 ist d.h wieder auf anfang
            if (count >= imgurl.length-1) {
                count = -1;
            }
            count++; // count + 1 damit nächstes kommt
            changeSlide(); // ruft Funktion auf welche die bg-images ändert
            console.log(count);
        }
        var slideInt = setInterval(countNext, speed);
        // interval für autoplay funktion (countNext) setzten (speed = variable oben)



        // Click event auf previous Button
        $('.prev-link').on('click', function () {
            resetInt(); // interval zurücksetzen - damit es während dem klicken nicht weiterläuft
            // wenn count = 0 (mistertny.jpg) dann wieder auf imgurl.length - 1
            // - 1 weil length = 4 aber das Bild an der Array stelle 3 ist das letzte

            if (count === 0) {
                count = imgurl.length-1;
            } else if (count === imgurl.length) {
                // wenn auf dem letzten bild dann auf das vorletzte d.h nicht length - 1 sondern
                // - 2 weil das bild an der Array stelle 2 gefragt ist
                // (nur notwendig da es am anfang als erstes angezeigt wird und man trotzdem züruck klicken kann)
                count = imgurl.length-2;
            } else {
                count--;
                // wenn keine bedingung zutrifft, count = count - 1 und bg-image mit neuem count setzen
            }
            $herobg.css('background-image', imgurl[count]);

            console.log('prev-btn clicked');
            console.log('interval cleared');
            console.log('current image: ' + imgurl[count]);
        });

        // Click event auf next Button
        $('.next-link').on('click', function () {
            resetInt(); // gleich wie bei prev Button = interval zurücksetzen
            if (count === imgurl.length-1) {
                // wenn count = 3 (length = 4,also wieder - 1) d.h auf letztem Bild
                count = -1; // DANN count = -1 weil countNext() wieder aufgerufen wird und dort count++ gesetzt ist d.h count wird auf 0 gesetzt
            }
            countNext();

            console.log('next-btn clicked');
            console.log('interval cleared');
            console.log('current image: ' + imgurl[count]);
        });



    });


    // ------------------------------------
    // --------- FORM VALIDATION ----------
    // ------------------------------------
    $(document).ready(function () {

        // auf Submit Button Click
        $('#myform').on('submit', function (_e) {

            // alle Fehlermeldungen entfernen
            // (falls inzwischen ein Feld richtig ausgefüllt wurde wird jeweiliger span entfernt entfernt)
            var $removeErr = function (_e) {
                _e.find('span.default-error, span.errormsg').remove();
            }
            $removeErr($(this));



            // Funktion für 'Default' Fehlermeldung
            // (erstellt span und 'default' Text)
            // wenn input leer = dann gleicher Text bei allen text-inputs und jeweiliger container als parameter übergeben
            // im übergebenen Parameter (Container) nach dem Text vom Label suchen und in die Fehlermeldung ausgeben (slice deswegen weil alle Label ':' am Ende haben)
            var $defaulterr = function (cnt) {
                var $createdefaulterr = $('<span class="default-error"></span>');
                cnt.append($createdefaulterr);
                cnt.find('.default-error').text('*Please fill in your ' + cnt.find('label').text().slice(0, -1));
            }

            // Funktion für 'advanced' Fehlermeldungen
            // der zugehörige Container wird als parameter übergegeben und erzeugtes <span> wird in dem Container als letztes Element angefügt
            var $adderrorspan = function (event) {
                var $createspan = $('<span class="errormsg"></span>');
                event.append($createspan);
            }


            //  RADIO BUTTONS
            var $radiocnt = $('.radiobtn-cnt'); // Container selektieren

            // im Container alle inputs mit type="radio" finden die :checked sind
            // also: WENN keines :checked ist (length <= 0) DANN Fehlermeldung
            if ($radiocnt.find('input[type="radio"]:checked').length <= 0) {
                // Container als parameter übergeben
                // <span> wird im Container eingefügt
                $adderrorspan($radiocnt);
                // text in <span> reinschreiben
                $radiocnt.find('.errormsg').text('*Please select your gender');
            }


            // NAME
            var $namecnt = $('.name-cnt'); // Container selektieren
            var $name = $('#name'); // zugehörigen input selektieren

            // wenn input leer ist dann Fehlermeldung
            // (Leerzeichen mit trim() entfernen)
            if ($name.val().trim() === "") {
                $defaulterr($namecnt);
                // 'Default' Fehlermeldung ausgeben
            }

            // variable mit 'nicht erlaubten' Zeichen als String
            // für NAME & LASTNAME !
            var notallowed = "+/0123456789!§$%&/()=?_:;";

            for (var i = 0; i < $name.val().length; i++) {

                // das i-te Zeichen im Input als variable speichern
                var z = $name.val().charAt(i);

                // WENN ein nicht erlaubtes Zeichen (notallowed) an der stelle
                // z (prüft alle Zeichen) im Inputfeld vorkommt DANN Fehlermeldung
                // kurz: wenn mehr als 0 (> -1) nicht erlaubte Zeichen -> Fehlermeldung
                if (notallowed.indexOf(z) > -1) {
                    // alle Fehlermeldungen im übergebenen Container entfernen
                    // ($adderrorspan würde sich sonst immer je nach $name.val().length
                    // vermehren)
                    $removeErr($namecnt);
                    // Funktion aufrufen und Container als Parameter übergeben
                    // span wird an Container angehängt und zugehörige Fehlermeldung ausgegeben
                    $adderrorspan($namecnt);
                    $namecnt.find('.errormsg').text('*Please fill in a valid name with only letters from A-Z');

                }

            }


            // LASTNAME (gleiche Logik bzw. Ausführung wie bei NAME)

            var $lastnamecnt = $('.lastname-cnt'); // Container selektieren
            var $lastname = $('#lastname'); // zugehörigen input selektieren

            // wenn input leer ist dann Fehlermeldung
            // (Leerzeichen mit trim() entfernen)
            if ($lastname.val().trim() === "") {
                $defaulterr($lastnamecnt);
                // 'Default' Fehlermeldung ausgeben
            }
            for (var i = 0; i < $lastname.val().length; i++) {

                // das i-te Zeichen im Input als variable speichern
                var z = $lastname.val().charAt(i);

                // WENN ein nicht erlaubtes Zeichen (notallowed) an der stelle
                // z (prüft alle Zeichen) im Inputfeld vorkommt DANN Fehlermeldung
                // kurz: wenn mehr als 0 (> -1) nicht erlaubte Zeichen -> Fehlermeldung
                if (notallowed.indexOf(z) > -1) {
                    // alle Fehlermeldungen im übergebenen Container entfernen
                    // ($adderrorspan würde sich sonst immer je nach $name.val().length
                    // vermehren)
                    $removeErr($lastnamecnt);
                    // Funktion aufrufen und Container als Parameter übergeben
                    // span wird an Container angehängt und zugehörige Fehlermeldung ausgegeben
                    $adderrorspan($lastnamecnt);
                    $lastnamecnt.find('.errormsg').text('*Please fill in a valid last name with only letters from A-Z');
                }
            }


            // EMAIL

            var $mailcnt = $('.mail-cnt'); // Container selektieren
            var $mail = $('#mail') // zugehörigen input selektieren

            // wenn input leer ist dann Fehlermeldung
            // (Leerzeichen mit trim() entfernen)
            if ($mail.val().trim() === "") {
                $defaulterr($mailcnt);
                // 'Default' Fehlermeldung ausgeben
            }
            // checkt ob @ vorkommt, wenn nicht -> Fehlermeldung
            // UND wenn @ vorkommt und an erster Stelle -> Fehlermeldung
            else if ($mail.val().indexOf('@') < 1) {
                $adderrorspan($mailcnt);
                $mailcnt.find('.errormsg').text('*Please fill in a valid email with an "@" but not as the first character');
            }
            // checkt ob nach '@' mindestens 2 Zeichen Folgen
            // wenn nicht -> Fehlermeldung
            else if($mail.val().substr($mail.val().indexOf("@") + 1).length <= 1) {
                // Funktion aufrufen und Container als Parameter übergeben
                // span wird an Container angehängt und zugehörige Fehlermeldung ausgegeben
                $adderrorspan($mailcnt);
                $mailcnt.find('.errormsg').text('*Please fill in a valid email with an "@" and at least 2 characters following after it.');
            }



            // PHONE
            var $phonecnt = $('.phone-cnt'); // Container selektieren
            var $phone = $('#phone'); // zugehörigen input selektieren

            // wenn input leer ist dann Fehlermeldung
            // (Leerzeichen mit trim() entfernen)
            if ($phone.val().trim() === "") {
                $defaulterr($phonecnt);
                // 'Default' Fehlermeldung ausgeben
            }

            for (var i = 0; i < $phone.val().length; i++) {
                // Zeichen die erlaubt(!) sind in variable speichern
                var validphone = " +-/0123456789";

                // das i-te Zeichen im Input als variable speichern
                var z = $phone.val().charAt(i);

                // WENN ein Zeichen welches nicht in validphone vorhanden ist
                // im Input steht -
                // - ODER WENN ein '+' Zeichen im Input vorhanden ist aber NICHT an erster Stelle DANN -> Fehlermeldung
                if (validphone.indexOf(z) === -1 || z === '+' && i > 0) {
                    // alle Fehlermeldungen im übergebenen Container entfernen
                    // ($adderrorspan würde sich sonst immer je nach $name.val().length
                    // vermehren)
                    $removeErr($phonecnt);
                    // Funktion aufrufen und Container als Parameter übergeben
                    // span wird an Container angehängt und zugehörige Fehlermeldung ausgegeben
                    $adderrorspan($phonecnt);
                    $phonecnt.find('.errormsg').text('*Please fill in a valid phone number with only digits and if needed, a "+" as the first character');

                }
            }


            // CHECKBOX
            var $agbcnt = $('.agb-check-cnt'); // Container selektieren

            // im Container alle inputs finden die :checked sind
            // also: WENN keines :checked ist (length <= 0) DANN Fehlermeldung
            if ($agbcnt.find('input:checked').length <= 0) {
                // Container als parameter übergeben
                // <span> wird im Container eingefügt
                $adderrorspan($agbcnt);
                // text in <span> reinschreiben
                $agbcnt.find('.errormsg').text('*Please agree to the AGB');
            }

            // sofortiges 'abschicken' des Formulars verhindern ->
            // somit kann das Formular geprüft und die Fehlermeldungen ausgegeben werden
            _e.preventDefault();
        });
    });


})(jQuery);




