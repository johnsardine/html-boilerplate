/* Author:
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

*/
jQuery(document).ready(function(){

	/* ==== * Jquery Test * ==== */
	jQuery('#jquery-test').hide();



	/* ==== * Show/hide Options based in radio selects * ==== */
	jQuery('.checked-show').each(function() {
		jQuery(this).find('input').click(function() {
			jQuery('.checked-show').next('.checked-info').hide();
			jQuery(this).parent('.checked-show').next().show();
		});
		jQuery(this).find('input:checked').parent('.checked-show').next().show();
	});
	


	/* ==== * Hide element after X time * ==== */
	setTimeout(function(){
		jQuery(".fade").fadeOut("slow", function () {
			jQuery(".fade").hide();
		});
	}, 4000);



	/* ==== * Removing element after clicking close * ==== */
	jQuery('.close').click(function () {
		jQuery(this).parent().fadeOut('normal', function () {
			jQuery(this).hide();
		});
		return false;
	});



	/* ==== * Easytabs * ==== */
	if(jQuery().easytabs) {

		jQuery('.tabs').easytabs({
			transitionIn: 'slideDown',
			transitionOut: 'slideUp'
		});
	
	}
	
	
	/* ==== * jQuery Slides * ==== */
	if (jQuery().slides) {
		jQuery('#slides').slides({
			preload: false,
			generatePagination: false,
			play: 5000,
			pause: 5000,
			effect: 'fade',
			crossfade: false,
			hoverPause: false,
			autoHeight: true,
			slidesLoaded: function () {
				$(".slides_control").height($(".slides_control img:first").height());
			}
		});	
	}
	
	
	/* ==== * Validate Form * ==== */
	if (jQuery().validate) {
		jQuery(".validate").validate({
			errorElement: "label",
			errorClass: "invalid",
			validClass: "valid",
		});
	}
	
	
	
	/* ==== * Fancybox * ==== */
	if(jQuery().fancybox) {
	
		//Add fancybox to each image in .post with hyperlink
		var $thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';
		
		
		var $posts = jQuery('.post');
		
		$posts.each(function() {
		    jQuery(this).find($thumbnails).addClass("fancybox").attr('rel','fancybox'+$posts.index(this))
		});
		
		jQuery(".fancybox, a[rel=gallery]").fancybox({
			'padding' : 10,
			'modal' : false,
			'opacity' : true,
			
			'overlayShow' : true,
			'overlayOpacity' : 0.3,
			'overlayColor' : '#fff',
			
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic',
			
			'easingIn' : 'swing',
			'easingOut' : 'swing',
			
			'autoScale' : false,
			'autoDimensions' : false,
			'centerOnScroll' : false,
			
			'hideOnOverlayClick' : true,
			'hideOnContentClick' : true,
			
			'showCloseButton'	 : true,
			'showNavArrows' : true,
			'enableEscapeButton' : true,
			'enableKeyboardNav' : true
		});

	}




	/* ==== * Collapsible Boxes With Cookies * ====
	* Markup:
	* <div class="collapse module">
	* 	<h4 class="header">Collapsible <span>x</span></h4>
	* 	<div>
	* 		= content =
	* 	</div>
	* </div>
	*/

	jQuery(".collapse .header").addClass("active");

	var l = jQuery('.collapse .header').length;

	var panel = jQuery(".collapse>div");

	jQuery('.collapse .header').append('<span clas="symbol">+</span>');

	for (c=0;c<=l;c++){

		var cvalue = jQuery.cookie('panel' + c);

		if ( cvalue == 'closed' + c ) {
			jQuery(panel).eq(c).css({display:"none"});
			jQuery(panel).eq(c).prev().removeClass('active').addClass('inactive');
		};
	};

	/* ==== * Active Mode * ==== */
	jQuery(".collapse .header.active").toggle(
		function () {
		    var num = jQuery(".collapse .header").index(this);
		    var cookieName = 'panel' + num;
		    var cookieValue = 'closed' + num;
		    jQuery(this).next(".collapse>div").slideUp('fast');
		    jQuery(this).removeClass('active');
			jQuery.cookie(cookieName, cookieValue, { path: '/', expires: 10 });//clean cookie
		},
		function () {
			var num = jQuery(".collapse .header").index(this);
			var cookieName = 'panel' + num;
			jQuery(this).next(".collapse>div").slideDown('fast');
			jQuery(this).addClass("active");
			jQuery.cookie(cookieName, null, { path: '/', expires: 10 });//clean cookie
		}
	);

	/* ==== * Inactive Mode * ==== */
	jQuery(".collapse .header.inactive").toggle(
		function () {
			var num = jQuery(".collapse .header").index(this);
			var cookieName = 'panel' + num;
			jQuery(this).next(".collapse>div").slideDown('fast');
			jQuery(this).addClass("active");
			jQuery(this).removeClass('inactive');
			jQuery.cookie(cookieName, null, { path: '/', expires: 10 });//set cookie
		},
		function () {
			var num = jQuery(".collapse .header").index(this);
			var cookieName = 'panel' + num;
			var cookieValue = 'closed' + num;
			jQuery(this).next(".collapse>div").slideUp('fast');
			jQuery(this).removeClass('active');
			jQuery.cookie(cookieName, cookieValue, { path: '/', expires: 10 });//set cookie
		}
	);
	
});