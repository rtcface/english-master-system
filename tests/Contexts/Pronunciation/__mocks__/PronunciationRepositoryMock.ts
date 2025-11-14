import { PronunciationAnalysis } from '../../../../src/Contexts/Pronunciation/domain/PronunciationAnalysis';
import { PronunciationRepository } from '../../../../src/Contexts/Pronunciation/domain/PronunciationRepository';

export class PronunciationRepositoryMock implements PronunciationRepository {
	public findById = jest.fn();

	async save(analysis: PronunciationAnalysis): Promise<void> {
		await this.mockSave(analysis);
	}

	assertLastSavedAnalysisIs(expected: PronunciationAnalysis): void {
		const mock = this.mockSave.mock;
		const lastSavedAnalysis = (mock.calls[mock.calls.length - 1] as PronunciationAnalysis[])[0];
		expect(lastSavedAnalysis).toBeInstanceOf(PronunciationAnalysis);
		expect(lastSavedAnalysis.id).toEqual(expected.id);
		expect(lastSavedAnalysis.userId).toEqual(expected.userId);
	}

	private readonly mockSave = jest.fn();
}
