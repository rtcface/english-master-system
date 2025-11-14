import { StatisticsFinder } from '../../../../../src/Contexts/Statistics/application/StatisticsFinder';
import { GlobalStatistics } from '../../../../../src/Contexts/Statistics/domain/GlobalStatistics';
import { StatisticsRepositoryMock } from '../__mocks__/StatisticsRepositoryMock';

let repository: StatisticsRepositoryMock;
let finder: StatisticsFinder;

beforeEach(() => {
	repository = new StatisticsRepositoryMock();
	finder = new StatisticsFinder(repository);
});

describe('StatisticsFinder', () => {
	it('should find latest global statistics', async () => {
		const statistics = new GlobalStatistics({
			id: 'stats-id',
			totalUsers: 100,
			averageVocabularyScore: 82.5,
			averageGrammarScore: 78.3,
			averageListeningScore: 85.1,
			averageSpeakingScore: 80.2,
			methodEffectiveness: 87.5
		});

		repository.findLatest = jest.fn().mockResolvedValue(statistics);

		const foundStatistics = await finder.run();

		expect(foundStatistics).toEqual(statistics);
	});

	it('should return null when statistics are not found', async () => {
		repository.findLatest = jest.fn().mockResolvedValue(null);

		const foundStatistics = await finder.run();

		expect(foundStatistics).toBeNull();
	});
});

