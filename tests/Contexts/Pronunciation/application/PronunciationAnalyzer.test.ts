import { PronunciationAnalyzer } from '../../../../../src/Contexts/Pronunciation/application/PronunciationAnalyzer';
import { PronunciationAnalysis } from '../../../../../src/Contexts/Pronunciation/domain/PronunciationAnalysis';
import { PronunciationScore } from '../../../../../src/Contexts/Pronunciation/domain/PronunciationScore';
import { PronunciationFeedback } from '../../../../../src/Contexts/Pronunciation/domain/PronunciationFeedback';
import { PronunciationRepositoryMock } from '../__mocks__/PronunciationRepositoryMock';

let repository: PronunciationRepositoryMock;
let analyzer: PronunciationAnalyzer;

beforeEach(() => {
	repository = new PronunciationRepositoryMock();
	analyzer = new PronunciationAnalyzer(repository);
});

describe('PronunciationAnalyzer', () => {
	it('should analyze audio and generate pronunciation report', async () => {
		const id = 'analysis-id';
		const userId = 'user-id';
		const audioUrl = 'https://example.com/audio.mp3';
		const pronunciationScore = new PronunciationScore({
			pronunciation: 85,
			fluency: 80,
			coherence: 90
		});
		const feedback = new PronunciationFeedback({
			message: 'Good pronunciation overall, work on fluency',
			suggestions: ['Practice speaking more slowly', 'Focus on word stress']
		});

		const analysis = new PronunciationAnalysis({
			id,
			userId,
			audioUrl,
			score: pronunciationScore,
			feedback
		});

		await analyzer.run(id, userId, audioUrl, pronunciationScore, feedback);

		repository.assertLastSavedAnalysisIs(analysis);
	});
});

