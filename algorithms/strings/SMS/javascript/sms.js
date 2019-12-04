/**
 * 0 < K[int] <= 500
 * 0 <= S[str] <= 500
 */

function sms(S, K) {
	let sms = "";
	let i = 0;
	const arr = S.split(" ");

	const final = new Set();

	while (i <= S.length) {
		if (sms.length <= K) {
			sms += S.charAt(i);
		} else {
			if (sms.charAt(sms.length - 1) !== " ") {
				const x = sms.split(" ");
				const temp = [];
				for (let k = 0; k < arr.length; k++) {
					if (arr[k].length > K) {
						return -1;
					}
					for (let i = 0; i < x.length; i++) {
						if (arr[k] === x[i]) {
							temp.push(x[i]);
						}
					}
				}
				sms = temp.join(" ");
				const last = x.pop().length;
				final.add(sms);
				sms = "";
				i -= last + 1;
			} else {
				const smsArr = sms.split(" ");
				smsArr.pop();
				sms = smsArr.join(" ");
				final.add(sms);
				sms = "";
				i--;
			}
		}
		i++;
		if (i === S.length) {
			final.add(sms);
		}
	}

	return typeof final !== "undefined" ? final.size : -1;
}

module.exports = sms;
