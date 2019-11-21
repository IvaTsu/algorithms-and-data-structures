// 1. Detect the length of the string.
// 1.1. If the length is 0 - return {}.
// 1.2. If the length is bigger than 0 - return the needed result.
// 2. Split the string into the array of characters.
// 3. Iterate each value from the splitted string through the original string.
// 4. Put number of iterations to a separate variable to compose a result.

function countLetters(string) {
	let result = {};
	if (string.length === 0) {
		return result;
	} else {
		const arrayOfChars = string.split('');

		arrayOfChars.map(function (char) {
			let numberOfOccurrence = 0;

			for (let i = 0; i < string.length; i++) {
				if (char === string.charAt(i)) {
					numberOfOccurrence++;
				}
			}

			result[char] = numberOfOccurrence;
			numberOfOccurrence = 0;
		})
		return result;
	}
}

module.exports = countLetters;