class TNode {
	constructor(value) {
		this.left = null
		this.right = null
		this.value = value
	}
}

class Tree {
	constructor(valueList) {
		this.nodeList = []
		this.root = null
		this.init(valueList)
	}
	insert(tnode, parentTnode = this.root) {
		if (!this.root) {
			this.root = tnode;
		} else {
			if (tnode.value < parentTnode.value) {
				if (!parentTnode.left) {
					parentTnode.left = tnode
				} else {
					this.insert(tnode, parentTnode.left)
				}
			} else {
				if (!parentTnode.right) {
					parentTnode.right = tnode
				} else {
					this.insert(tnode, parentTnode.right)
				}
			}
		}
	}
	search() { }
	init(valueList) {
		for (let i in valueList) {
			let value = valueList[i]
			let newNode = new TNode(value)
			this.insert(newNode)
		}
	}
	zhongxu() {
		let traverse = (tnode = this.root) => {
			if (tnode !== null) {
				traverse(tnode.left)
				console.log(tnode.value)
				traverse(tnode.right)
			}
		}
		traverse()
	}
	qianxu() {
		let traverse = (tnode = this.root) => {
			if (tnode !== null) {
				console.log(tnode.value)
				traverse(tnode.left)
				traverse(tnode.right)
			}
		}
		traverse()
	}
	zhongxu1(root) {
		let result = []
		let stack = []
		while (root || stack.length > 0) {
			while (root) {
				stack.push(root)
				result.push(root.value)
				root = root.left
			}
			root = stack.pop()
			root = root.right
		}
		return result
	}
	bfs() {
		let queue = []
		let current = this.root
		while (queue.length||current) {
			while (current) {
				queue.push(current)
				current = current.left
			}
		}
	}
}

let valueList = [123, 35, 87, 78, 64, 416, 46, 151, 64, 4]
let result = new Tree(valueList)
console.log(result.zhongxu1(result.root))
result.zhongxu()
