let stack = []
stack.maxStack = []

let originPush = stack.push
let originPop = stack.pop
stack.push = function (num) {
	originPush.call(this, num)
	stack.maxStack.push(Math.max(num, stack.maxStack[stack.maxStack.length - 1] || 0))
	console.log(stack.maxStack[stack.maxStack.length - 1])
}

stack.pop = function () {
	originPop.call(this)
	stack.maxStack.pop()
	console.log(stack.maxStack)
}

stack.push(1)
stack.push(2)
stack.push(1)
stack.pop()
stack.pop()
