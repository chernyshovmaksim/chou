import { trimText } from './modules/trimText'

let newsEls = document.querySelectorAll('.news__description')

newsEls.forEach(el => {
	let oldText = el.textContent
	let newText = trimText(oldText, 200, '...')
	el.innerText = newText
})
