function diagonalSum(matrix) {
	let sum = 0;
	let inner = 0;

	for (var i = matrix.length; i > 0; i--) {
		inner = matrix[i - 1];
		sum += inner[i - 1];
	}

	return sum;
}

module.exports = diagonalSum;