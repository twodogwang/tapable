function bubble(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				arr[j] = arr[j] + arr[j + 1]
				arr[j + 1] = arr[j] - arr[j + 1]
				arr[j] = arr[j] - arr[j + 1]
			}
		}
	}
}

let array = [7, 5, 2, 9, 1, 5, 1231, 48, 12, 3, 4, 72, 3, 78, 21, 879]
bubble(array)
console.log(array)
