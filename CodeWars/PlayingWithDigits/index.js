function digPow(n, p) {
	var k =
		n
			.toString()
			.split('')
			.map((elem, index) => {
				return Math.pow(elem, index + p);
			})
			.reduce((prev, curr) => {
				return prev + curr;
			}) / n;

	return Number.isInteger(k) ? k : -1;
}
