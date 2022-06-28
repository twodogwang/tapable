// // require('./a')
// // require('./b')

// function flat(k, arr) {
// 	let length = arr.length;
// 	let maxNum = arr.sort((a, b) => b - a)[0];
// 	let flattedK = maxNum * length - arr.reduce((prev, curr) => prev + curr);
// 	let diff = k - flattedK
// 	if (diff <= 0) {
// 		return maxNum
// 	} else {
// 		return Math.ceil(diff / length) + maxNum
// 	}
// }

// console.log(flat(5, [1, 2, 3]))

// function sum(num) {
// 	let result = num
// 	return function calc(n) {
// 		result += n
// 		console.log(result)
// 		return calc
// 	}
// }

// sum(1)(2)(3)

// /**
//  * @param {number[]} cost
//  * @return {number}
//  */
// var minCostClimbingStairs = function (cost) {
// 	let dp = [cost[0], cost[1]], length = cost.length
// 	for (let i = 2; i <= length - 1; i++) {
// 		dp[i] = Math.min(dp[i - 2] + cost[i], dp[i - 1] + cost[i])
// 	}
// 	return dp[length - 1]
// };

// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])


// /**
//  * @param {string} version1
//  * @param {string} version2
//  * @return {number}
//  */
// var compareVersion = function (version1, version2) {
// 	let version1Arr = version1.split('.'), version2Arr = version2.split('.')
// 	let compare = function (v1, v2) {
// 		v1 = v1 === undefined ? 0 : v1;
// 		v2 = v2 === undefined ? 0 : v2;
// 		if (Number(v1) < Number(v2)) return -1
// 		if (Number(v1) > Number(v2)) return 1
// 		return 0
// 	}
// 	let length = Math.max(version1Arr.length, version2Arr.length)
// 	for (let i = 0; i < length; i++) {
// 		let result = compare(version1Arr[i], version2Arr[i])
// 		if (!result) {
// 			continue
// 		} else {
// 			return result
// 		}
// 	}
// 	return 0
// };

// compareVersion('1.0.0', '1.0')

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
// 	strs = strs.sort((a, b) => a.length - b.length)
// 	let minLengthStr = strs[0]
// 	let prefix = '';
// 	for (let i = 1; i <= minLengthStr.length; i++) {
// 		let targetStr = minLengthStr.substring(0, i)
// 		let result = strs.every(str => str.substring(0, i) === targetStr)
// 		if (result) {
// 			prefix = targetStr
// 		} else {
// 			break
// 		}
// 	}
// 	return prefix
// };

// longestCommonPrefix(["a"])


// var isSameTree = function (p, q) {
// 	function inOrder(root) {
// 		let result = []
// 		let stack = []
// 		while (root || stack.length) {
// 			while (root) {
// 				stack.push(root.val)
// 				result.push(root)
// 				root = root.left
// 			}
// 			result.push(null)
// 			root = stack.pop()
// 			root = root.right
// 		}
// 		return result
// 	}
// 	let orderP = inOrder(p)
// 	let orderQ = inOrder(q)
// 	if (orderP.length !== orderQ.length) return false
// 	for (let i in orderP) {
// 		if (orderP[i] !== orderQ[i]) return false
// 	}
// 	return true
// };

// isSameTree([1, 2, 1], [1, 1, 2])


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 1) return nums[0]
	if (nums.length === 2) return Math.max(nums[0], nums[1])
	/* let dp = [nums[0], Math.max(nums[0], nums[1])]
	let nums2 = nums.slice(1)
	let dp2 = [nums2[0], Math.max(nums2[0], nums2[1])]
	for (let i = 2; i <= nums.length - 1; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
	}
	for (let i = 2; i <= nums2.length - 1; i++) {
		dp2[i] = Math.max(dp2[i - 2] + nums2[i], dp2[i - 1])
	}
	return Math.max(dp[nums.length - 2], dp2[nums2.length - 1]) */
	let prev2 = nums[0], prev1 = Math.max(nums[0], nums[1]), curr = prev1;
	for (let i = 2; i < nums.length - 1; i++) {
		curr = Math.max(prev2 + nums[i], prev1)
		prev2 = prev1
		prev1 = curr
	}
	let result1 = curr
	prev2 = nums[1]; prev1 = Math.max(nums[1], nums[2]); curr = prev1
	for (let i = 3; i < nums.length; i++) {
		curr = Math.max(prev2 + nums[i], prev1)
		prev2 = prev1
		prev1 = curr
	}
	let result2 = curr
	return Math.max(result1, result2)
};

rob([2, 1, 1])

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
	let stack = [root]
	let result = []
	let last
	while (stack.length) {
		root = stack[stack.length - 1]
		if (root) {
			if (root.children.length) {
				if (last === root.children[root.children.length - 1]) {
					result.push(root.val) && stack.pop()
					last = root
				} else {
					for (let i = root.children.length - 1; i >= 0; i--) {
						if (root.children[i]) {
							stack.push(root.children[i]);
						}
					}
				}
			} else {
				last = root
				result.push(root.val)
				stack.pop()
			}
		} else {
			stack.pop()
		}
	}
	return result
};

console.log(postorder({ "val": 1, "children": [{ "val": 2, "children": [] }, { "val": 3, "children": [{ "val": 6, "children": [] }, { "val": 7, "children": [{ "val": 11, "children": [{ "val": 14, "children": [] }] }] }] }, { "val": 4, "children": [{ "val": 8, "children": [{ "val": 12, "children": [] }] }] }, { "val": 5, "children": [{ "val": 9, "children": [{ "val": 13, "children": [] }] }, { "val": 10, "children": [] }] }] }
))
