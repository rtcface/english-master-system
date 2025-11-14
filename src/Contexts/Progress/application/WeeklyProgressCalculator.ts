import { ProgressMetrics } from '../domain/ProgressMetrics';
import { ProgressRepository } from '../domain/ProgressRepository';

export class WeeklyProgressCalculator {
	private readonly repository: ProgressRepository;

	constructor(repository: ProgressRepository) {
		this.repository = repository;
	}

	async run(
		id: string,
		userId: string,
		week: number,
		vocabularyScore: number,
		grammarScore: number,
		listeningScore: number,
		speakingScore: number
	): Promise<void> {
		const progressMetrics = new ProgressMetrics({
			id,
			userId,
			week,
			vocabularyScore,
			grammarScore,
			listeningScore,
			speakingScore
		});

		return this.repository.save(progressMetrics);
	}
}

