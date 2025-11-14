export class PronunciationScore {
	readonly pronunciation: number; // 0-100
	readonly fluency: number; // 0-100
	readonly coherence: number; // 0-100

	constructor({
		pronunciation,
		fluency,
		coherence
	}: {
		pronunciation: number;
		fluency: number;
		coherence: number;
	}) {
		this.pronunciation = pronunciation;
		this.fluency = fluency;
		this.coherence = coherence;
	}
}

