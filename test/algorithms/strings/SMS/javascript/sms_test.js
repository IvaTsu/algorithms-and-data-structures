const { assert } = require("chai");
const sms = require("../../../../../algorithms/strings/SMS/javascript/sms.js");

describe("sms", function() {
	const testCases = [
		{
			S: "SMS messages are really short",
			K: 12
		},
		{
			S: "SMS messages are really short",
			K: 10
		},
		{
			S: "SMS messages are really short. No jokes.",
			K: 14
		}
	];

	const expectedCases = [3, 4, 4];

	for (let i = 0; i < testCases.length; i++) {
		let description = "should return: " + JSON.stringify(expectedCases[i]);
		it(description, function() {
			assert(sms(testCases[i].S, testCases[i].K), expectedCases[i]);
		});
	}
});
