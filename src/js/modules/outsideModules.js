export default () => {

	const outsiderEl = document.querySelector('.outside-widgets')
	const jivositeEl = document.createElement('script')

	jivositeEl.setAttribute('src', '//code-ya.jivosite.com/widget/pTwhVlLXJK')
	jivositeEl.setAttribute('async', 'async')

	setTimeout(() => {
		insertEl(jivositeEl)
	}, 2000)


	const insertEl = (el) => {
		outsiderEl.append(el)
	}
	
}
