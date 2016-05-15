$.fn.background = function() {
	this.parent().css({
		'background': 'url("'+this.attr('src')+'") no-repeat center center',
		'background-size': 'cover'
	});
}
$(function() {
	$('.menu-open').on('click', function(e) {
		e.preventDefault();
		if ( !$('.menu').hasClass('opened') ) {
			$('.menu').addClass('opened');
			$('header .menu-open').hide();
		} else {
			$('.menu').removeClass('opened');
			$('header .menu-open').show();
		}
	});
	$('.menu .close-icon').on('click', function(e) {
		e.preventDefault();
		$('.menu').removeClass('opened');
		$('header .menu-open').show();
	});
	$('html').click(function() {
		$('.menu').removeClass('opened');
		$('header .menu-open').show();
	});
	$('.menu, .menu-open').click(function(e) {
		e.stopPropagation();
	});
	$(window).load(function() {
		$('.index .text p').typewrite({
			'delay': 75
		});
	});
	$(window).bind('scroll', function() {
		var difference = $(window).scrollTop()+$(window).height()-$('footer').offset().top;
		if ( difference < 0 ) {
			$('.player .bg').css({
				'margin-top': '0'
			});
			$('.player').removeClass('short');
		} else {
			$('.player .bg').css({
				'margin-top': -difference+'px'
			});
			$('.player').addClass('short');
		}
		if ( !$('.player').hasClass('inner') || Modernizr.mq('(min-width:1000px)') ) {
			var c = 40;
		} else {
			var c = 0;
		}
		if ( difference > c ) {
			$('.player').css({
				'bottom': difference-c+'px'
			});
		} else {
			$('.player').css({
				'bottom': '0'
			});
		}
	});
	$(window).trigger('scroll');
	function h1Position() {
		if ( Modernizr.mq('(max-width:639px)') ) {
			$('h1').detach().insertAfter($('header'));
		} else {
			$('h1').detach().appendTo($('header'));
		}
	}
	function photoRatio() {
		$('.gallery-b li, .gallery-b li a').height($('.gallery-b li').width()*400/620);
	}
	function setPlayerPos() {
		if ( $('.index').length === 0 && !Modernizr.mq('(min-width:1000px)') ) {
			$('.player').addClass('inner');
		}
	}
	function videoPos() {
		$('.video-b li').each(function() {
			$(this).find('div').css({
				'margin-top': -$(this).find('div').outerHeight()/2-4+'px'
			});
		});
	}
	h1Position();
	photoRatio();
	setPlayerPos();
	videoPos();
	$(window).resize(function() {
		h1Position();
		photoRatio();
		setPlayerPos();
		$(window).trigger('scroll');
		videoPos();
	});
	$(window).load(function() {
		$(window).trigger('scroll');
		videoPos();
	});
	$('.img-bg').each(function() {
		$(this).background();
	});
	$('.player .play-pause').bind('click', function() {
		$(this).toggleClass('paused');
	});
	$('.video-open').fancybox({
		padding: 0,
		margin: 0,
		width: $(window).width(),
		height: $(window).height(),
		helpers: {
			media: {},
			overlay: {
				locked: false
			}
		}
	});
	$('.photo-open').fancybox({
		padding: 0,
		margin: 0,
		width: $(window).width(),
		height: $(window).height(),
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});