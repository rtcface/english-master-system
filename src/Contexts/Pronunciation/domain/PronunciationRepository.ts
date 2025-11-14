import { PronunciationAnalysis } from './PronunciationAnalysis';

export interface PronunciationRepository {
	save(analysis: PronunciationAnalysis): Promise<void>;
	findById(id: string): Promise<PronunciationAnalysis | null>;
}
