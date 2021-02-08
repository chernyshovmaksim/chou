const Cookies = require('js-cookie');

export function agreementFunc() {
	let agreement = Cookies.get('agreement');

	if (!agreement) {
		console.log('Согласие не дано.');
	}
}


