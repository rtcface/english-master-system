import { Feedback } from '../domain/Feedback';
import { FeedbackRepository } from '../domain/FeedbackRepository';
import { FeedbackType } from '../domain/FeedbackType';

export class PersonalizedFeedbackGenerator {
	private readonly repository: FeedbackRepository;

	constructor(repository: FeedbackRepository) {
		this.repository = repository;
	}

	async run(
		id: string,
		taskId: string,
		userId: string,
		type: FeedbackType,
		message: string,
		recommendations: string[]
	): Promise<void> {
		const feedback = new Feedback({
			id,
			taskId,
			userId,
			type,
			message,
			recommendations
		});

		return this.repository.save(feedback);
	}
}
