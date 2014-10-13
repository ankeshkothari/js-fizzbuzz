var maxNumber = prompt("Please enter a number");

for(var number = 1; number <= maxNumber; number++){
	if (number % 3 === 0 && number % 5 === 0) {
		document.write("fizzbuzz ");
	}
	else if (number % 5 === 0) {
		document.write("buzz ");
	}
	else if (number % 3 === 0) {
		document.write("fizz ");
	}
	else {
		document.write(number + " ");
	}
};

