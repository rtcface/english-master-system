import { GlobalStatistics } from '../domain/GlobalStatistics';
import { StatisticsRepository } from '../domain/StatisticsRepository';

export class GlobalStatisticsCalculator {
	private readonly repository: StatisticsRepository;

	constructor(repository: StatisticsRepository) {
		this.repository = repository;
	}

	async run(
		id: string,
		totalUsers: number,
		averageVocabularyScore: number,
		averageGrammarScore: number,
		averageListeningScore: number,
		averageSpeakingScore: number,
		methodEffectiveness: number
	): Promise<void> {
		const statistics = new GlobalStatistics({
			id,
			totalUsers,
			averageVocabularyScore,
			averageGrammarScore,
			averageListeningScore,
			averageSpeakingScore,
			methodEffectiveness
		});

		return this.repository.save(statistics);
	}
}

