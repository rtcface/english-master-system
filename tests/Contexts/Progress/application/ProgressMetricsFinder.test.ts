import { ProgressMetricsFinder } from '../../../../../src/Contexts/Progress/application/ProgressMetricsFinder';
import { ProgressMetrics } from '../../../../../src/Contexts/Progress/domain/ProgressMetrics';
import { ProgressRepositoryMock } from '../__mocks__/ProgressRepositoryMock';

let repository: ProgressRepositoryMock;
let finder: ProgressMetricsFinder;

beforeEach(() => {
	repository = new ProgressRepositoryMock();
	finder = new ProgressMetricsFinder(repository);
});

describe('ProgressMetricsFinder', () => {
	it('should find progress metrics by user id and week', async () => {
		const userId = 'user-id';
		const week = 1;
		const progressMetrics = new ProgressMetrics({
			id: 'metrics-id',
			userId,
			week,
			vocabularyScore: 85,
			grammarScore: 80,
			listeningScore: 90,
			speakingScore: 75
		});

		repository.findByUserIdAndWeek = jest.fn().mockResolvedValue(progressMetrics);

		const foundMetrics = await finder.run(userId, week);

		expect(foundMetrics).toEqual(progressMetrics);
	});

	it('should find all progress metrics by user id', async () => {
		const userId = 'user-id';
		const metrics = [
			new ProgressMetrics({
				id: 'metrics-1',
				userId,
				week: 1,
				vocabularyScore: 85,
				grammarScore: 80,
				listeningScore: 90,
				speakingScore: 75
			}),
			new ProgressMetrics({
				id: 'metrics-2',
				userId,
				week: 2,
				vocabularyScore: 88,
				grammarScore: 82,
				listeningScore: 92,
				speakingScore: 78
			})
		];

		repository.findByUserId = jest.fn().mockResolvedValue(metrics);

		const foundMetrics = await finder.findAll(userId);

		expect(foundMetrics).toEqual(metrics);
	});
});

