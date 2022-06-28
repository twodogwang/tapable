/* const {SyncHook} = require('./lib/index');

const hook = new SyncHook(); // 创建钩子对象
hook.tap('logPlugin', () => console.log('被勾了1')); // tap方法注册钩子回调
hook.tap('logPlugin', () => console.log('被勾了2')); // tap方法注册钩子回调
hook.call(); // call方法调用钩子，打印出‘被勾了’三个字 */

/* Promise.resolve().then(() => { setTimeout(() => { console.log(1) }, 0) });
setImmediate(() => { console.log(2) });
setTimeout(() => { console.log(3) }, 0); */
function spawn(genF) {
	let gen = genF()
	return new Promise((resolve, reject) => {
		function run(lastValue) {
			try {
				var result = gen.next(lastValue);
			} catch (error) {
				console.error(error)
			}
			if (result.done) {
				resolve(result.value)
			} else {
				Promise.resolve(result.value).then(res => {
					run(res)
				}).catch(rej => {
					reject(rej)
				})
			}
		}
		run()
	})
}

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
spawn(a).then(res=>{
	console.log(res)
})

module.exports = a
