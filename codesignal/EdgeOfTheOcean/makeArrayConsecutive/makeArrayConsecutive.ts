function solution6(sequence: number[]) {
	return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}
