import { Feedback } from '../domain/Feedback';
import { FeedbackRepository } from '../domain/FeedbackRepository';

export class InMemoryFeedbackRepository implements FeedbackRepository {
	private readonly feedbacks: Map<string, Feedback> = new Map();
	private readonly taskFeedbacks: Map<string, string> = new Map(); // taskId -> feedbackId

	async save(feedback: Feedback): Promise<void> {
		this.feedbacks.set(feedback.id, feedback);
		this.taskFeedbacks.set(feedback.taskId, feedback.id);
	}

	async findByTaskId(taskId: string): Promise<Feedback | null> {
		const feedbackId = this.taskFeedbacks.get(taskId);
		if (!feedbackId) {
			return null;
		}

		return this.feedbacks.get(feedbackId) ?? null;
	}
}
