const { assert } = require("chai");
const diagonalSum = require("../../../../../algorithms/arrays/DiagonalSum/javascript/diagonalSum");

describe("diagonalSum", function() {
	const testCases = [
		[[1]],
		[[2, 2], [3, 4]],
		[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	];

	const expectedCases = [
		1,
		6,
		15
	];

	for (let i = 0; i < testCases.length; i++) {
		let description = "should return: " + expectedCases[i];
		it(description, function() {
			assert(diagonalSum(testCases[i]), expectedCases[i]);
		});
	}
});
