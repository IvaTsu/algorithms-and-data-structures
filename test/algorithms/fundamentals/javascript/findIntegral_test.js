const { assert } = require("chai");
const findIntegral = require("../../../../algorithms/fundamentals/findIntegral/javascript/findIntegral");

describe("findIntegral", function() {
	const testCases = [
		"3x^2",
		"12x^5",
		"20x^1",
		"40x^3",
		"90x^2"
	];

	const expectedCases = [
		"1x^3",
		"2x^6",
		"10x^2",
		"10x^4",
		"30x^3"
	];

	for (let i = 0; i < testCases.length; i++) {
		let description = "should return: " + expectedCases[i];
		it(description, function() {
			assert(findIntegral(testCases[i]), expectedCases[i]);
		});
	}
});
