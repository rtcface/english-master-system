import { PronunciationAnalysis } from '../domain/PronunciationAnalysis';
import { PronunciationFeedback } from '../domain/PronunciationFeedback';
import { PronunciationRepository } from '../domain/PronunciationRepository';
import { PronunciationScore } from '../domain/PronunciationScore';

export class PronunciationAnalyzer {
	private readonly repository: PronunciationRepository;

	constructor(repository: PronunciationRepository) {
		this.repository = repository;
	}

	async run(
		id: string,
		userId: string,
		audioUrl: string,
		score: PronunciationScore,
		feedback: PronunciationFeedback
	): Promise<void> {
		const analysis = new PronunciationAnalysis({
			id,
			userId,
			audioUrl,
			score,
			feedback
		});

		return this.repository.save(analysis);
	}
}

