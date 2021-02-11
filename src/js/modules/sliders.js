import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';

import $ from 'jquery';

$('.attach-news__container').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	mobileFirst: true
});
