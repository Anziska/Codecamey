function positiveSum(arr) {
	let sum = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		let number = arr[i];
		if (number > 0) {
			sum = sum + number;
		}
	}
	return sum;
}
