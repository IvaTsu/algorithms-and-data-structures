const { assert } = require("chai");
const vectorMultiplication = require("../../../../../algorithms/arrays/VectorMultiplication/javascript/vectorMultiplication");

describe("vectorMultiplication", function() {
	const testCases = [
		[1],
		[1, 2, 3],
		[2, 2, 3, 4],
		[4, 5, 6, 7, 8, 9],
		[1, 2, 3, 4, 5, 6, 7, 8, 9]
	];

	const expectedCases = [
		1,
		6,
		96,
		60480,
		362880
	];

	for (let i = 0; i < testCases.length; i++) {
		let description = "should return: " + expectedCases[i];
		it(description, function() {
			assert(vectorMultiplication(testCases[i]), expectedCases[i]);
		});
	}
});
