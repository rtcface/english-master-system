import { WeeklyProgressCalculator } from '../../../../src/Contexts/Progress/application/WeeklyProgressCalculator';
import { ProgressMetrics } from '../../../../src/Contexts/Progress/domain/ProgressMetrics';
import { ProgressRepositoryMock } from '../__mocks__/ProgressRepositoryMock';

let repository: ProgressRepositoryMock;
let calculator: WeeklyProgressCalculator;

beforeEach(() => {
	repository = new ProgressRepositoryMock();
	calculator = new WeeklyProgressCalculator(repository);
});

describe('WeeklyProgressCalculator', () => {
	it('should calculate and save weekly progress metrics', async () => {
		const id = 'metrics-id';
		const userId = 'user-id';
		const week = 1;
		const vocabularyScore = 85;
		const grammarScore = 80;
		const listeningScore = 90;
		const speakingScore = 75;

		const progressMetrics = new ProgressMetrics({
			id,
			userId,
			week,
			vocabularyScore,
			grammarScore,
			listeningScore,
			speakingScore
		});

		await calculator.run(
			id,
			userId,
			week,
			vocabularyScore,
			grammarScore,
			listeningScore,
			speakingScore
		);

		repository.assertLastSavedProgressMetricsIs(progressMetrics);
	});
});
