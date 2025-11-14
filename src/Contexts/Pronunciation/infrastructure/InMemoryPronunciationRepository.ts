import { PronunciationAnalysis } from '../domain/PronunciationAnalysis';
import { PronunciationRepository } from '../domain/PronunciationRepository';

export class InMemoryPronunciationRepository implements PronunciationRepository {
	private readonly analyses: Map<string, PronunciationAnalysis> = new Map();

	async save(analysis: PronunciationAnalysis): Promise<void> {
		this.analyses.set(analysis.id, analysis);
	}

	async findById(id: string): Promise<PronunciationAnalysis | null> {
		return this.analyses.get(id) ?? null;
	}
}

