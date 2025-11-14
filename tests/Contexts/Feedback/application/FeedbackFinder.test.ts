import { FeedbackFinder } from '../../../../src/Contexts/Feedback/application/FeedbackFinder';
import { Feedback } from '../../../../src/Contexts/Feedback/domain/Feedback';
import { FeedbackType } from '../../../../src/Contexts/Feedback/domain/FeedbackType';
import { FeedbackRepositoryMock } from '../__mocks__/FeedbackRepositoryMock';

let repository: FeedbackRepositoryMock;
let finder: FeedbackFinder;

beforeEach(() => {
	repository = new FeedbackRepositoryMock();
	finder = new FeedbackFinder(repository);
});

describe('FeedbackFinder', () => {
	it('should find feedback by task id', async () => {
		const taskId = 'task-id';
		const feedback = new Feedback({
			id: 'feedback-id',
			taskId,
			userId: 'user-id',
			type: FeedbackType.GRAMMAR,
			message: 'Work on verb tenses',
			recommendations: ['Practice past tense']
		});

		repository.findByTaskId = jest.fn().mockResolvedValue(feedback);

		const foundFeedback = await finder.run(taskId);

		expect(foundFeedback).toEqual(feedback);
	});

	it('should return null when feedback is not found', async () => {
		const taskId = 'non-existent-task';

		repository.findByTaskId = jest.fn().mockResolvedValue(null);

		const foundFeedback = await finder.run(taskId);

		expect(foundFeedback).toBeNull();
	});
});

