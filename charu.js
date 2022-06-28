function charupaixu(arr) {
	let sortedIndex = 1
	for (let i = sortedIndex; i < arr.length; i++) {
		for (let j = 0; j < sortedIndex; j++) {
			if (arr[i] < arr[j]) {
				arr.splice(j, 0, arr[i])
				arr.splice(i + 1, 1)
				break
			}
		}
		sortedIndex++
	}
}

let array = [7, 5, 2, 9, 1, 5, 1231, 48, 12, 3, 4, 72, 3, 78, 21, 879]
charupaixu(array)
console.log(array)
