function findIntegral(integral) {
	const coefficient = parseInt(integral.charAt(0));
	let exponent = parseInt(integral.charAt(integral.length - 1));
	const power = ++exponent;

	return (coefficient / power) + "x^" + power;
}

const derivative = findIntegral("3x^2");
console.log(derivative);