/* Author:

*/
jQuery(document).ready(function(){

	/* ==== * Jquery Test * ==== */
	jQuery('#jquery-test').hide();


	if(jQuery().easytabs) {

		/* ==== * Easytabs * ==== */
		jQuery('.tabs').easytabs({
			transitionIn: 'slideDown',
			transitionOut: 'slideUp'
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