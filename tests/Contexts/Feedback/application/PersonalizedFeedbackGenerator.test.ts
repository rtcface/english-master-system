import { PersonalizedFeedbackGenerator } from '../../../../../src/Contexts/Feedback/application/PersonalizedFeedbackGenerator';
import { Feedback } from '../../../../../src/Contexts/Feedback/domain/Feedback';
import { FeedbackType } from '../../../../../src/Contexts/Feedback/domain/FeedbackType';
import { FeedbackRepositoryMock } from '../__mocks__/FeedbackRepositoryMock';

let repository: FeedbackRepositoryMock;
let generator: PersonalizedFeedbackGenerator;

beforeEach(() => {
	repository = new FeedbackRepositoryMock();
	generator = new PersonalizedFeedbackGenerator(repository);
});

describe('PersonalizedFeedbackGenerator', () => {
	it('should generate personalized feedback using NLP analysis', async () => {
		const id = 'feedback-id';
		const taskId = 'task-id';
		const userId = 'user-id';
		const type = FeedbackType.GRAMMAR;
		const message = 'Work on verb tenses';
		const recommendations = ['Practice past tense', 'Review present perfect'];

		const feedback = new Feedback({
			id,
			taskId,
			userId,
			type,
			message,
			recommendations
		});

		await generator.run(id, taskId, userId, type, message, recommendations);

		repository.assertLastSavedFeedbackIs(feedback);
	});
});

