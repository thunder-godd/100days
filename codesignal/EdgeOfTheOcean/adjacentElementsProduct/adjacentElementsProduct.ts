function solution4(inputArray: number[]): number {
	const len: number = inputArray.length;
	let prods: number[] = [];
	for (let i = 0; i < len - 1; i++) {
		let prod: number = inputArray[i] * inputArray[i + 1];
		prods = [...prods, prod];
	}
	console.log(prods);
	return Math.max(...prods);
}
