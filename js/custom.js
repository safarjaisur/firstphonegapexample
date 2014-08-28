
////////////////////////////////////////////  
// LOADING
///////////////////////////////////////////  

//window.onload=function() {
    //document.getElementById('loading-mask').style.display='none';

//}



jQuery(document).ready(function($){
		
	"use strict";


	
////////////////////////////////////////////  
// LOGO
///////////////////////////////////////////  

	var logoheight = jQuery(".logo-wrap").outerHeight();
	var navheight = jQuery(".sf-menu>li>a").outerHeight();
	
	var resultheight = (logoheight-navheight)/2;
	
	jQuery(".sf-menu>li>a").css({paddingTop:resultheight, paddingBottom:resultheight,});

	

////////////////////////////////////////////  
// MENU
///////////////////////////////////////////  
	
	if(jQuery().superfish){
		jQuery('ul.sf-menu').superfish({
			delay:       100,                            // one second delay on mouseout
			speed:       'fast',                          // faster animation speed
			autoArrows:  true                            // disable generation of arrow mark-up	
		});	
	}
	
	jQuery('#nav ul li li a').mouseenter(function() {
			jQuery(this).animate({ paddingLeft:'+=10'}, 200, 'swing');
		}).mouseleave(function() {
			jQuery(this).animate({ paddingLeft:'-=10'}, 200, 'swing');
		});
	
	
	var winWidth = jQuery(window).width();
	
	/*if( winWidth > 979 ){*/
	jQuery("nav").sticky({ topSpacing: 0});	
	/*}*/
	/*jQuery(".mobile-menu").sticky({ topSpacing: 0});	*/	
	
	
	

////////////////////////////////////////////  
// PAGE SCROLL
///////////////////////////////////////////  	
		
	
	jQuery(function() {
		jQuery('.scroll').bind('click', function(event) {
			var $anchor = jQuery(this);
			var headerH = jQuery('#navbar').outerHeight();
			jQuery('html, body').stop().animate({
				scrollTop : jQuery($anchor.attr('href')).offset().top - 61
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	}); 


	jQuery(function() {
		jQuery('.scroll-mobile').bind('click', function(event) {
			var anchora = jQuery(this);
			var headerH = jQuery('#navbar').outerHeight();
			jQuery('html, body').stop().animate({
				scrollTop : jQuery(anchora.attr('href')).offset().top - 473
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	
	
////////////////////////////////////////////  
// MOBILE MENU TOGGLE
///////////////////////////////////////////  
	
	jQuery('.nav-toggle a').click(function(){
		jQuery('.mobile-menu').stop(true,true).slideToggle(500);
		return false;
	});
	
	jQuery('.mobile-menu ul li a.right-dir').prepend('<i class="icon-plus"></i>');
	
	jQuery('.mobile-menu ul li a.right-dir').click(function(){
		jQuery('ul.ms-menu').stop(true,true).slideToggle(500);
		return false;
	});
	
	jQuery('a.site-toggle').click(function(){
		jQuery('.your-site-bottom').stop(true,true).slideToggle(500);
		return false;
	});	
	
	
	/*jQuery('.menu li a').click(function(){
		jQuery('.mobile-menu').stop(true,true).fadeOut(0);
		return false;
	});*/




////////////////////////////////////////////  
// NICESCROLL
///////////////////////////////////////////

	if ( $().niceScroll ) {
		$("body").niceScroll({
			cursorcolor:"#e4593a",
			cursorwidth:10,
			cursorborder: 0,
			cursorborderradius: 0,
			zindex: 9999
	
		});
	}



////////////////////////////////////////////  
// EASY PIE CHART
///////////////////////////////////////////  
	
	jQuery('.chart').waypoint({	
		
		handler: function mpchart(){
					jQuery('.percentage').easyPieChart({
						easing: 'easeOutBounce',
						barColor: '#2e3235' ,
						trackColor: '#dd4d47',
						scaleColor: false,
						lineCap: 'butt',
						rotate: 0,
						lineWidth: 8,
						animate: 2000,
						size:70,
						onStep: function(value) {
							this.$el.find('span').text(Math.round(value));
						}
					});	
										
				},
		offset: '95%'
	
	})
	

////////////////////////////////////////////  
// ANIMATION
///////////////////////////////////////////	

	jQuery(window).load(function(e) {
		
		jQuery(".service-animation").waypoint({  // Service
	
			handler: function portfolioPopup(){
						jQuery('.service-animation>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('teamidea-animation')) {
								 popupItem.addClass('teamidea-animation');
								//setTimeout(function(){ popupItem.addClass('teamidea-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery("#portfolio-filter").waypoint({  // portfolio 
	
			handler: function portfolioPopup(){
						jQuery('#portfolio-filter').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('teamidea-animation')) {
								setTimeout(function(){ popupItem.addClass('teamidea-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		
		
    });
	
	

////////////////////////////////////////////  
// FLEXSLIDER
///////////////////////////////////////////
	
	function header() {
		var windowHeight = $(window).height();
		var slider = $("#sequence");
		slider.css("height",windowHeight+"px");

	}
	header();
	
	function footer() {
		var windowHeight = $(window).height();
		var full = $(".footer");
		full.css("height",windowHeight+"px");

	}
	footer();
	
	$(".footer-fixed").css({position:"fixed",left:($(window).width()-$(".footer-fixed").outerWidth())/2,top:($(window).height()-$(".footer-fixed").outerHeight())/2});
	
	$(window).resize(function(){
		header();
		footer();
	});
	

	/*$('#home-slider.flexslider').flexslider({						
			animation: "swing",
			direction: "vertical", 
			slideshow: false,
			slideshowSpeed: 3500,
			animationDuration: 1000,
			directionNav: false,
			controlNav: true,
			smootheHeight:true,
			after: function(slider) {
			  slider.removeClass('loading');
			}
				
	 });*/

	
	 
 
////////////////////////////////////////////  
// COOLCAROUSEL
///////////////////////////////////////////
	
	//BLOG SLIDER
    var owl = $(".owl-demo.blog_slider");

    owl.owlCarousel({
		navigation: true,
		pagination: false,
		items : 5,
		itemsDesktop : [600,2]
	});
	
	
	
	jQuery('.owl-controls').addClass('container');
	
	
	// the carousel
	var $carousel = null;
	
	//	the draggable wrapper
	var $wrapper = null;

	//	the width of one item
	var itemWidth = 870;

	//	the duration of the scrolling
	var scrollDuration = 300;

	//	dragging-engine
	var startDragPosition = false;
	function startDrag( event ) {
		event.preventDefault();

		if ( $carousel.triggerHandler( 'isScrolling' ) ) {
			startDragPosition = false;
			return;
		}
		startDragPosition = event.pageX;
		$wrapper.bind(
			'mousemove',
			function( e ) {
				$wrapper.css({
					'marginLeft': -(itemWidth + startDragPosition - e.pageX)
				});
			}
		);
	}
	function stopDrag( event ) {
		event.preventDefault();
		$wrapper.unbind('mousemove');

		if ( startDragPosition ) {
			var currentDragPosition = event.pageX;
			var direction = false;
			if ( startDragPosition < currentDragPosition ) {
				direction = 'prev';
			} else if ( startDragPosition > currentDragPosition ) {
				direction = 'next';
			}
			if ( direction ) {
				$carousel.trigger( direction );
				$wrapper.animate({
					'marginLeft': -itemWidth
				}, scrollDuration);
			}
		}
		startDragPosition = false;
	}


		
});



////////////////////////////////////////////  
// header fix
///////////////////////////////////////////  

var cbpAnimatedHeader=(function(){var b=document.documentElement,g=document.querySelector(".header-fix"),e=false,a=100;function f(){window.addEventListener("scroll",function(h){if(!e){e=true;setTimeout(d,400)}},false)}function d(){var h=c();if(h>=a){classie.add(g,"heaer-top-fix")}else{classie.remove(g,"heaer-top-fix")}e=false}function c(){return window.pageYOffset||b.scrollTop}f()})();



////////////////////////////////////////////  
// ScrollUp 
///////////////////////////////////////////  

	/**
	* scrollUp v1.1.0
	* Author: Mark Goodyear - http://www.markgoodyear.com
	* Git: https://github.com/markgoodyear/scrollup
	*
	* Copyright 2013 Mark Goodyear
	* Licensed under the MIT license
	* http://www.opensource.org/licenses/mit-license.php
	*/

	$(document).ready(function(){

		'use strict';

		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 200, // Distance from top before showing element (px)
				topSpeed: 1200, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).scroll(function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).click( function(event) {
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();

	});
	
	
	
	
////////////////////////////////////////////  
// Mobile menu left bar
///////////////////////////////////////////  


/* <![CDATA[ */
var wp_menufication = {"element":"#wp_menufication","enable_menufication":"on","headerLogo":"","headerLogoLink":"","menuLogo":"","menuText":"","triggerWidth":"767","addHomeLink":null,"addHomeText":"","addSearchField":"on","hideDefaultMenu":"on","onlyMobile":null,"direction":"left","theme":"dark","childMenuSupport":"on","childMenuSelector":"sub-menu, children","activeClassSelector":"current-menu-item, current-page-item, active","enableSwipe":"on","doCapitalization":null,"supportAndroidAbove":"3.5","disableSlideScaling":null,"toggleElement":"","customMenuElement":"","customFixedHeader":"","addToFixedHolder":"","page_menu_support":null,"wrapTagsInList":"","allowedTags":"DIV, NAV, UL, OL, LI, A, P, H1, H2, H3, H4, SPAN, FORM, INPUT, SEARCH","customCSS":"@media all and (max-width:770px) {\r\n    #menu-topmenu {display:none !important}\r\n    #menufication-top #menufication-header-logo, #menufication-            non-css3-top #menufication-non-css3-header-logo {\r\n   max-height:30px !important;\r\n}\r\n\r\n#menufication-outer-wrap.menufication-transition-in-multiple .menufication-multiple-right {\r\n    transform: translate3d(30px, 0px, 0px) !important;\r\n}\r\n}","is_page_menu":"","enableMultiple":"1"};
/* ]]> */



