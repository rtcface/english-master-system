import { PronunciationAnalysis } from '../domain/PronunciationAnalysis';
import { PronunciationRepository } from '../domain/PronunciationRepository';

export class InMemoryPronunciationRepository implements PronunciationRepository {
	private readonly analyses: Map<string, PronunciationAnalysis> = new Map();

	async save(analysis: PronunciationAnalysis): Promise<void> {
		this.analyses.set(analysis.id, analysis);

		return Promise.resolve();
	}

	async findById(id: string): Promise<PronunciationAnalysis | null> {
		const analysis = this.analyses.get(id) ?? null;

		return Promise.resolve(analysis);
	}
}
