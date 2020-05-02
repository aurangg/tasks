(function($) {
	$(document).ready(function() {
		"use strict";

	// PRELOADER
		loader()
		function loader(_success) {
			var obj = document.querySelector('.preloader'),
			inner = document.querySelector('.inner .percentage'),
			page = document.querySelector('body');
			obj.classList.remove('page-loaded');
			page.classList.add('page-loaded');
			var w = 0,
				t = setInterval(function() {
					w = w + 1;
					inner.textContent = w;
					if (w === 100){
						obj.classList.add('page-loaded');
						page.classList.remove('page-loaded');
						clearInterval(t);
						w = 0;
						if (_success){
							return _success();
						}
					}
				}, 20);
		}



		// PAGE TRANSITION
		$('body a').on('click', function(e) {

			if (typeof $( this ).data('fancybox') == 'undefined') {
			e.preventDefault();
			var url = this.getAttribute("href");
			if( url.indexOf('#') != -1 ) {
			var hash = url.substring(url.indexOf('#'));

			if( $('body ' + hash ).length != 0 ){
			$('.transition-overlay').removeClass("active");
			$(".hamburger").toggleClass("open");
			$("body").toggleClass("overflow");
			$(".navigation-menu").removeClass("active");
			$(".navigation-menu .inner ul").css("transition-delay", "0s");
			$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
			$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 1000);

			}
			}
			else {
			$('.transition-overlay').toggleClass("active");
			setTimeout(function(){
			window.location = url;
			},600);

			}
			}
			});





		// GO TO TOP
			$(window).scroll(function () {
				if ($(this).scrollTop() > 300) {
					$('.gotop').fadeIn();
				} else {
					$('.gotop').fadeOut();
				}
			});

			$('.gotop').on('click', function(e) {
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false;
			});





		// STICKY SIDE LOGO
		$(window).on("scroll touchmove", function () {
		$('.logo').toggleClass('sticky', $(document).scrollTop() > 300);
		});




		// HIDE NAVBAR
		$(window).on("scroll touchmove", function () {
		$('.navbar').toggleClass('hide', $(document).scrollTop() > 30);
		});




		// DATA BACKGROUND IMAGE
			var pageSection = $(".swiper-slide");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-image", "url(" + $(this).data("background") + ")");
				}
			});





		// MASONRY
		var $container = $('.works ul').imagesLoaded( function() {
			$container.isotope({
			  itemSelector: '.works ul li',
			  layoutMode: 'masonry'
			});
		});



		});


		// SCROLL BG COLOR
		$(window).scroll(function() {
		  var $window = $(window),
			  $body = $('body'),
			  $panel = $('section, footer, header');

		  var scroll = $window.scrollTop() + ($window.height() / 3);

		  $panel.each(function () {
			var $this = $(this);
			if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

			  $body.removeClass(function (index, css) {
				return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
			  });

			  $body.addClass('color-' + $(this).data('color'));
			}
		  });

		}).scroll();



		// WOW ANIMATION
			wow = new WOW(
			{
				animateClass: 'animated',
				offset:       50
			}
			);
			wow.init();



		// COUNTER
			 $(document).scroll(function(){
				$('.odometer').each( function () {
					var parent_section_postion = $(this).closest('section').position();
					var parent_section_top = parent_section_postion.top;
					if ($(document).scrollTop() > parent_section_top - 300) {
						if ($(this).data('status') == 'yes') {
							$(this).html( $(this).data('count') );
							$(this).data('status', 'no')
						}
					}
				});
			});


})(jQuery);
