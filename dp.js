let num = 50
const fiboTime = performance.timerify(fibo);
const fibonacciTime = performance.timerify(fibonacci);
let cache = {}
function fibo(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	let n2 = cache[n - 2] || (cache[n - 2] = fibo(n - 2))
	let n1 = cache[n - 1] || (cache[n - 1] = fibo(n - 1))
	return n2 + n1
}
console.log(fibo(num))

function fibonacci(n) {
	var last = 1
	var last2 = 0
	var current = last2
	for (var i = 1; i <= n; i++) {
		last2 = last
		last = current
		current = last + last2
	}
	return current
}

console.log(fibonacci(num))
/* console.log(speed(fibonacciTime, 3))

function speed(fn, n) {
	let start = new Date().getTime()
	console.log(fn.call(this, n))
	let end = new Date().getTime()
	return end - start
}

const obs = new PerformanceObserver((list) => {
	console.log(list.getEntries()[0]);
	obs.disconnect();
	performance.clearFunctions();
});
obs.observe({ entryTypes: ['function'] }); */

var feibo = function (param) {
	let last2 = 0, last1 = 1, current = 0;
	if (param == 0) return last2;
	if (param == 1) return last1
	for (let i = 2; i <= param; i++) {
		current = last2 + last1
		last2 = last1
		last1 = current
	}
	return current
}
console.log(feibo(num))

"use strict";
const fibonacci1 = (n, n1 = 0, n2 = 1) => {
	if (n < 2) {
		return n2;
	}
	return fibonacci1(n - 1, n2, n1 + n2);
};
console.log(fibonacci1(num))

function rob(houses) {
	if (houses.length == 1) {
		return houses[0]
	}
	if (houses.length == 2) {
		return Math.max(houses[0], houses[1])
	}
	return Math.max(rob(houses.slice(0, houses.length - 2)) + houses[houses.length - 1], rob(houses.slice(0, houses.length - 1)))
}
console.log(rob([2, 7, 9, 3, 3, 2]))

function longest(arr) {
	if (arr.length === 1) return 1;
	let dp = Array(arr.length).fill(1, 0, arr.length)
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
		// let j = i - 1 < 0 ? 0 : i - 1
		if (arr[i] > arr[j]) {
			dp[i] = Math.max(dp[j] + 1, dp[i])
		}
		}
	}
	return dp[dp.length - 1]
}

console.log('longest' + longest([10, 9, 2, 5, 3, 7, 101, 18]))
