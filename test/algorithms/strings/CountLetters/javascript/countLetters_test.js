const { expect } = require("chai");
const countLetters = require("../../../../../algorithms/strings/countLetters/javascript/countLetters");

describe("countLetters", function() {
	const testCases = [
		"",
		"ab",
		"aac",
		"aaaarray"
	];

	const expectedCases = [
		{},
		{ "a": 1, "b": 1 },
		{ "a": 2, "c": 1},
		{ "a": 5, "r": 2, y: 1}
	];

	for (let i = 0; i < testCases.length; i++) {
		let description = "should return: " + JSON.stringify(expectedCases[i]);
		it(description, function() {
			expect(countLetters(testCases[i])).to.include(expectedCases[i]);
		});
	}
});
