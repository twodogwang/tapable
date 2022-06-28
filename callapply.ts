Function.prototype.call1 = function (_this,...params) {
	let context = _this||window
	const fn = Symbol()
	context[fn] = this
	context[fn](...params)
}
