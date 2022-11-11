function solution(str) {
	//function with a name of solution and an argument of str
	var newString = "";
	//In the function we have a for loop
	//Inside the for loop we have a variable called i with a value of total letters in the name
	//str.length (represents the total letters in the name)
	// the total -1
	for (var i = str.length - 1; i >= 0; i--) {
		// i >= 0, is the value of i greater/bigger than or equal to 0
		// i--, means it will decrease the value of the variable by 1
		newString += str[i];
		// newString = newString + str[i];
		// gonna be the new value = current value + string(name) and the position in the name where the i currently is
		// eg. i === 6 (Its the 6th position in the string)
	}
	// After it ran the first time the code will run again because the number 6 isn't 0 or its not less or equal to 0.
	// It will keep running the code, decreasing it every time by 1 until it has reached 0
	return newString; //returns the newString after doing through the whole process
}
