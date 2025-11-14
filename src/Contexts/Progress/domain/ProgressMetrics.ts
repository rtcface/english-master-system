export class ProgressMetrics {
	readonly id: string;
	readonly userId: string;
	readonly week: number;
	readonly vocabularyScore: number;
	readonly grammarScore: number;
	readonly listeningScore: number;
	readonly speakingScore: number;

	constructor({
		id,
		userId,
		week,
		vocabularyScore,
		grammarScore,
		listeningScore,
		speakingScore
	}: {
		id: string;
		userId: string;
		week: number;
		vocabularyScore: number;
		grammarScore: number;
		listeningScore: number;
		speakingScore: number;
	}) {
		this.id = id;
		this.userId = userId;
		this.week = week;
		this.vocabularyScore = vocabularyScore;
		this.grammarScore = grammarScore;
		this.listeningScore = listeningScore;
		this.speakingScore = speakingScore;
	}
}

