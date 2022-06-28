// let a = require('./js.js')

function* a() {
	let result1 = yield new Promise(resolve => {
		setTimeout(() => {
			resolve(123)
		}, 1000);
	}).then(res => {
		return res + 1
	})
	console.log(result1)
	result1 += 1
	let result2 = yield new Promise(resolve => {
		setTimeout(() => {
			resolve(result1 + 1)
		}, 2000);
	})
	return result2
}
// setTimeout(() => {
// 	console.log(a.a)
// }, 1000);

function spawn(gen) {
	let generator=gen()
	return new Promise((resolve,reject)=>{
		function run(lastResult){
			try {
				let result = generator.next(lastResult)
				if(result.done) {
					resolve(result.value)
				}else {
					Promise.resolve(result.value).then(res=>{
						run(res)
					})
				}
			} catch (error) {
				reject(error)
			}
		}
		run()
	})
}

let result=spawn(a)
