function list(names) {
	return names
		.map((x) => {
			return x.name;
		})
		.join(', ')
		.replace(/, (?!.*,)/gim, ' & ');
}
