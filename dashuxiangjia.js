/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let arr1 = num1.split('')
	let arr2 = num2.split('')
	let upper = 0
	let arr = arr1.length > arr2.length ? arr2 : arr1
	let cha = Math.abs(arr1.length - arr2.length)
	for (let i = 0; i < cha; i++) {
		arr.unshift('0')
	}
	let result = []
	for (let i = arr.length - 1; i >= 0; i--) {
		let singleResult = Number.parseInt(arr1[i]) + Number.parseInt(arr2[i]) + upper
		if (singleResult >= 10) {
			upper = 1
			result.unshift(singleResult - 10)
		} else {
			result.unshift(singleResult)
			upper = 0
		}
	}
	if(upper)result.unshift(upper)
	return result.join('')
};

console.log(addStrings("1", "9"))
