// ----------------------------
// --------- GALLERY ----------
// ------------------------- //
(function ($, undefined) {


    $(document).ready(function(){


        var $thumbnails = $('.collection-gallery');
        var $thmblinks = $thumbnails.find('a');
        
        var $opengallery = function (_e) {

            /*$thumbnails.each(function(){

                var $list = $(this);
                var $a_links = $list.find('a');

                $a_links.on('click', function(_e){*/


                    _e.preventDefault();


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


                    $gallerybox.find('.exit-txt').on('click', function(){
                        $gallerybox.remove();
                    });



                    var $img = $('<img src="' + $(this).attr('href') + '">');


                    $gallerybox.find('.gallery-img-cnt').append($img);



                    $img.after('<span class="imagetitle">' + $(this).attr('title') +'</span>');



                    $gallerybox.find('.icon-arrow_back').after($(this).closest('.collection-gallery').clone());




                    $gallerybox.find('.collection-gallery a[href="' + $(this).attr('href') + '"]').closest('li').addClass('selected');




                    $gallerybox.find('.collection-gallery a').on('click', function(_e){


                        _e.preventDefault();


                        $gallerybox.find('.collection-gallery li.selected').removeClass('selected');

                        $(this).closest('li').addClass('selected');



                        $gallerybox.find('.gallery-img-cnt img').attr('src', $(this).attr('href'));




                        $gallerybox.find('.gallery-img-cnt .imagetitle').text($(this).attr('title'));


                    });



                    $gallerybox.find('.icon-arrow_forward').on('click', function(){

                        var $next = $gallerybox.find('.collection-gallery li.selected').next();

                        if($next.length) {

                            $next.find('a').trigger('click');
                        } else {

                            $gallerybox.find('a').first().trigger('click');
                        }
                    });


                    $gallerybox.find('.icon-arrow_back').on('click', function(){

                        var $prev = $gallerybox.find('.collection-gallery li.selected').prev();

                        if($prev.length) {

                            $prev.find('a').trigger('click');
                        } else {

                            $gallerybox.find('a').last().trigger('click');
                        }
                    });


                    $('body').prepend($gallerybox);

                    $gallerybox.fadeIn();

        }
        
        $thmblinks.on('click', $opengallery);







    });
})(jQuery);

