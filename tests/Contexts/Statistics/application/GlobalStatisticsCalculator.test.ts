import { GlobalStatisticsCalculator } from '../../../../../src/Contexts/Statistics/application/GlobalStatisticsCalculator';
import { GlobalStatistics } from '../../../../../src/Contexts/Statistics/domain/GlobalStatistics';
import { StatisticsRepositoryMock } from '../__mocks__/StatisticsRepositoryMock';

let repository: StatisticsRepositoryMock;
let calculator: GlobalStatisticsCalculator;

beforeEach(() => {
	repository = new StatisticsRepositoryMock();
	calculator = new GlobalStatisticsCalculator(repository);
});

describe('GlobalStatisticsCalculator', () => {
	it('should calculate and save anonymized global statistics', async () => {
		const id = 'stats-id';
		const totalUsers = 100;
		const averageVocabularyScore = 82.5;
		const averageGrammarScore = 78.3;
		const averageListeningScore = 85.1;
		const averageSpeakingScore = 80.2;
		const methodEffectiveness = 87.5;

		const statistics = new GlobalStatistics({
			id,
			totalUsers,
			averageVocabularyScore,
			averageGrammarScore,
			averageListeningScore,
			averageSpeakingScore,
			methodEffectiveness
		});

		await calculator.run(
			id,
			totalUsers,
			averageVocabularyScore,
			averageGrammarScore,
			averageListeningScore,
			averageSpeakingScore,
			methodEffectiveness
		);

		repository.assertLastSavedStatisticsIs(statistics);
	});
});

