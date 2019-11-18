// 1. It is possible to compose the result, from a few cases:
// 1.1. The array [* ... *] at the very top and very bottom should be the same.
// 1.2. Add * at the beginning and at the end of the next "n - 2" rows.
// 2. Combine results from those cases.

function addBorder(picture) {
	const pictureMatrix = [];
	let pictureHead = "";

	for (let i = 0; i < picture[0].length + 2; i++) {
		pictureHead += "*";
	}

	pictureMatrix.push(pictureHead);

	let pictureBody = "";

	for (let i = 0; i < picture.length; i++) {
		pictureBody += "*";
		let pic = picture[i];
		for (let j = 0; j < picture[0].length; j++) {
			pictureBody += pic.charAt(j);
		}
		pictureBody += "*";
		pictureMatrix.push(pictureBody);
		pic = "";
		pictureBody = "";
	}
	pictureMatrix.push(pictureHead);

	return pictureMatrix;
}

module.exports = addBorder;
