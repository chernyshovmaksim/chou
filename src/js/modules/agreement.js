const Cookies = require('js-cookie');
import '@fancyapps/fancybox';
import $ from 'jquery';

const timeout = 2500;

export function agreementFunc() {
	let agreement = Cookies.get('agreement');

	if (!agreement) {
		setTimeout(function () {
			$.fancybox.open({
				src: '#agreement-block',
				type: 'inline',
				opts: {
					afterClose: function () {
						Cookies.set('agreement', true);
						console.log('Подтвержено использование cookie');
					}
				}
			});
		}, timeout);
	} else {
		$('.remove-cookie').click(function () {
			Cookies.remove('agreement');
			location.reload();
		});
	}
}


