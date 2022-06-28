function debounce(fn) {
	let timer
	return function () {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn(...arguments)
		}, 1000);
	}
}
function fn() {
	console.log(...arguments)
}
let de = debounce(fn)
de(1)
de(1)
de(1)
de(1)
de(1)

function throttle(fn) {
	let timer, lasttime = new Date().getTime()
	return function () {
		/* if (timer) return
		timer = setTimeout(() => {
			fn.apply(this, arguments)
			timer = null
		}, 1000); */
		if (new Date().getTime() - lasttime > 1000) {
			fn.apply(this, arguments)
			lasttime = new Date().getTime()
		}
	}
}

let th = throttle(fn)
setInterval(() => {
	th(1)
}, 100);
