import { PronunciationFeedback } from './PronunciationFeedback';
import { PronunciationScore } from './PronunciationScore';

export class PronunciationAnalysis {
	readonly id: string;
	readonly userId: string;
	readonly audioUrl: string;
	readonly score: PronunciationScore;
	readonly feedback: PronunciationFeedback;
	readonly createdAt: Date;

	constructor({
		id,
		userId,
		audioUrl,
		score,
		feedback,
		createdAt
	}: {
		id: string;
		userId: string;
		audioUrl: string;
		score: PronunciationScore;
		feedback: PronunciationFeedback;
		createdAt?: Date;
	}) {
		this.id = id;
		this.userId = userId;
		this.audioUrl = audioUrl;
		this.score = score;
		this.feedback = feedback;
		this.createdAt = createdAt ?? new Date();
	}
}
