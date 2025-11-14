import { FeedbackType } from './FeedbackType';

export class Feedback {
	readonly id: string;
	readonly taskId: string;
	readonly userId: string;
	readonly type: FeedbackType;
	readonly message: string;
	readonly recommendations: string[];
	readonly createdAt: Date;

	constructor({
		id,
		taskId,
		userId,
		type,
		message,
		recommendations,
		createdAt
	}: {
		id: string;
		taskId: string;
		userId: string;
		type: FeedbackType;
		message: string;
		recommendations: string[];
		createdAt?: Date;
	}) {
		this.id = id;
		this.taskId = taskId;
		this.userId = userId;
		this.type = type;
		this.message = message;
		this.recommendations = recommendations;
		this.createdAt = createdAt ?? new Date();
	}
}
