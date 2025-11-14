export class GlobalStatistics {
	readonly id: string;
	readonly totalUsers: number;
	readonly averageVocabularyScore: number;
	readonly averageGrammarScore: number;
	readonly averageListeningScore: number;
	readonly averageSpeakingScore: number;
	readonly methodEffectiveness: number; // 0-100
	readonly calculatedAt: Date;

	constructor({
		id,
		totalUsers,
		averageVocabularyScore,
		averageGrammarScore,
		averageListeningScore,
		averageSpeakingScore,
		methodEffectiveness,
		calculatedAt
	}: {
		id: string;
		totalUsers: number;
		averageVocabularyScore: number;
		averageGrammarScore: number;
		averageListeningScore: number;
		averageSpeakingScore: number;
		methodEffectiveness: number;
		calculatedAt?: Date;
	}) {
		this.id = id;
		this.totalUsers = totalUsers;
		this.averageVocabularyScore = averageVocabularyScore;
		this.averageGrammarScore = averageGrammarScore;
		this.averageListeningScore = averageListeningScore;
		this.averageSpeakingScore = averageSpeakingScore;
		this.methodEffectiveness = methodEffectiveness;
		this.calculatedAt = calculatedAt ?? new Date();
	}
}
