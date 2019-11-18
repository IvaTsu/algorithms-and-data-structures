const { expect } = require("chai");
const addBorder = require("../../../../../algorithms/arrays/AddBorder/javascript/addBorder");

describe("addBorder", function() {
	const testCases = [
		["a"],
		["ab", "cd"],
		["abc", "abc"],
		["abc", "abc", "abc"],
		["abc", "abc", "***", "abc"],
		["abcd", "abcd", "abcd"]
	];

	const expectedCases = [
		["***", "*a*", "***"],
		["****", "*ab*", "*cd*", "****"],
		["*****", "*abc*", "*abc*", "*****"],
		["*****", "*abc*", "*abc*", "*abc*", "*****"],
		["*****", "*abc*", "*abc*", "*****", "*abc*", "*****"],
		["******", "*abcd*", "*abcd*", "*abcd*", "******"]
	];

	for (let i = 0; i < testCases.length; i++) {
		let description = "should return: " + expectedCases[i];
		it(description, function() {
			expect(addBorder(testCases[i])).to.eql(expectedCases[i]);
		});
	}
});
