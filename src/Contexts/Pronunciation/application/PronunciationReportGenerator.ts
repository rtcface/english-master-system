import { PronunciationAnalysis } from '../domain/PronunciationAnalysis';
import { PronunciationRepository } from '../domain/PronunciationRepository';

export class PronunciationReportGenerator {
	private readonly repository: PronunciationRepository;

	constructor(repository: PronunciationRepository) {
		this.repository = repository;
	}

	async run(analysisId: string): Promise<PronunciationAnalysis> {
		const analysis = await this.repository.findById(analysisId);

		if (!analysis) {
			throw new Error(`Pronunciation analysis with id ${analysisId} not found`);
		}

		return analysis;
	}
}
