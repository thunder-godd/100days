function solution5(n: number): number {
	let rims = (n - 1) * 4;

	if (n == 1) {
		return 1;
	} else {
		return solution5(n - 1) + rims;
	}
}
