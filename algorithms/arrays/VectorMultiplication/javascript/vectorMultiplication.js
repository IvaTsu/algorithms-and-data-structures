function vectorMultiplication(vector) {
	const result = vector.reduce(function(previousValue, currentValue) {
		return previousValue * currentValue;
	});
	return result;
}

module.exports = vectorMultiplication;