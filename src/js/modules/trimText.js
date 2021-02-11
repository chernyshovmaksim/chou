
const trimText = (text, length, end = '') => {
	let index = text.indexOf(" ", length)
	if (index == -1) index = length
	return text.slice(0, index) + end
}

export {trimText}


