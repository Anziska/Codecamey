function positiveSum(arr) {
	// function with the name positiveSum with an argument
	let sum = 0;
	// let is a variable with the name of sum and sum is 0
	for (var i = 0; i <= arr.length - 1; i++) {
		// for loop(variable of i and i is 0; i less than or equal to arr.length -1; add 1 )
		let number = arr[i];
		// number is the one where the i stands
		// using eg. i=1 number will be -4
		if (number > 0) {
			// if statement and in the if statement we have the number with a greater than 0
			// so if the number is greater than 0 it will run if not it wont
			sum = sum + number;
			// answer = sum (number put in) + number
		}
	}
	return sum;
}

// eg. arr = [1, -4, 7, 12]

function evenOrOdd(number) {
	// function named evenOrOdd with an  argument of number
	if (number % 2 === 0) {
		// if statement and inside the if statement you have the argument (number) the remainder sign, 2 equal sign to 0
		return "Even";
		// if the number is 0 it will show Even
	}
}
return "Odd";
// if the number is 1 it will show Odd

console.log(evenOrOdd(2));

function makeNegative(num) {
	// function with the name makeNegative and an argument of num
	return Math.abs(num) * -1;
	// The Math.abs() function returns the absolute value of a number.
}
