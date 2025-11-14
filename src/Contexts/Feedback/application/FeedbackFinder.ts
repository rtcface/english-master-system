import { Feedback } from '../domain/Feedback';
import { FeedbackRepository } from '../domain/FeedbackRepository';

export class FeedbackFinder {
	private readonly repository: FeedbackRepository;

	constructor(repository: FeedbackRepository) {
		this.repository = repository;
	}

	async run(taskId: string): Promise<Feedback | null> {
		return this.repository.findByTaskId(taskId);
	}
}
