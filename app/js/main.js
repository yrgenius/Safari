$(function() {

    $('.about__link, .country__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.gallery__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img class="gallery__prev" src="../images/main/prev.svg" alt="Назад"></button>',
		nextArrow: '<button type="button" class="slick-next"><img class="gallery__next" src="../images/main/next.svg" alt="Вперед"></button>'
		
	});

});