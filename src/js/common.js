$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$('html').toggleClass('is-fixed');
		$('.js-nav').toggleClass('is-opened');
	});

	$(window).on('scroll', function() {
		if($(this).scrollTop() > 0) {
			$('.header').addClass('is-fixed');
		} else {
			$('.header').removeClass('is-fixed');
		}
	});


	var partnersSlider = $('.js-partners-slider');
	var portfolioSlider = $('.js-portfolio-slider');


	if (partnersSlider.length > 0) {
		partnersSlider.slick({
			arrows: false,
			dots: false,
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true
		});
	}

	if (portfolioSlider.length > 0) {
		portfolioSlider.slick({
			infinite: true,
			dots: false,
			vertical: true,
			verticalSwiping: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			prevArrow: '',
			nextArrow: $('.js-portfolio-slider-btn')
		});
	}

	// Parallax

	function parallax(item){
		var scrolled = $(window).scrollTop();
		var speed = $(item).attr('data-parallax-speed');
		var direction = $(item).attr('data-parallax-direction');



		if(direction === 'horisontal-right') {
			$(item).css({
				'transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'horisontal-left') {
			$(item).css({
				'transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'vertical-top') {
			$(item).css({
				'transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)'
			});
		} else if(direction === 'vertical-bottom') {
			$(item).css({
				'transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)'
			});
		}
		

	}


	if ($('.js-item-parallax').length > 0) {

		if (html > 992) {


			$(window).on('scroll', function(e) {
				var scroll = $(this).scrollTop();

				$('.js-item-parallax').each(function() {
					
					parallax($(this));
					
				});

				
			});

		}

	}


	var floatImg = $('.portfolio-img');

	if (floatImg.length > 0) {

		var width = floatImg.outerWidth() / 2;
		var height  = floatImg.outerHeight() / 2;

		$('.portfolio-wrapper').on('mousemove', function(e) {
			floatImg.css({
				'left': e.pageX - width + 'px',
				'top': e.pageY - height + 'px'
			});
		});

		$('.portfolio-slide').on('mouseenter', function() {
			floatImg.find('span').css('background-image', 'url('+$(this).attr('data-img-src')+')');
		});

		$('.portfolio-slider').on('mouseenter', function() {
			floatImg.addClass('is-active');
		});

		$('.portfolio-slider').on('mouseleave', function() {
			floatImg.removeClass('is-active');
		});

		

		


	}



	AOS.init({
		once: true,
		duration: 800
	});


	setTimeout(function(){
		$('body').addClass('is-loaded');
	}, 1500);


});


window.addEventListener('load', AOS.refresh);