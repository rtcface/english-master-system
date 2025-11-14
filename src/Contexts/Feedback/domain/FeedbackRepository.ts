import { Feedback } from './Feedback';

export interface FeedbackRepository {
	save(feedback: Feedback): Promise<void>;
	findByTaskId(taskId: string): Promise<Feedback | null>;
}
