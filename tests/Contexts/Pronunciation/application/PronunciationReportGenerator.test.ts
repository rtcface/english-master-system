import { PronunciationReportGenerator } from '../../../../src/Contexts/Pronunciation/application/PronunciationReportGenerator';
import { PronunciationAnalysis } from '../../../../src/Contexts/Pronunciation/domain/PronunciationAnalysis';
import { PronunciationScore } from '../../../../src/Contexts/Pronunciation/domain/PronunciationScore';
import { PronunciationFeedback } from '../../../../src/Contexts/Pronunciation/domain/PronunciationFeedback';
import { PronunciationRepositoryMock } from '../__mocks__/PronunciationRepositoryMock';

let repository: PronunciationRepositoryMock;
let generator: PronunciationReportGenerator;

beforeEach(() => {
	repository = new PronunciationRepositoryMock();
	generator = new PronunciationReportGenerator(repository);
});

describe('PronunciationReportGenerator', () => {
	it('should generate a report with pronunciation scores', async () => {
		const analysisId = 'analysis-id';
		const analysis = new PronunciationAnalysis({
			id: analysisId,
			userId: 'user-id',
			audioUrl: 'https://example.com/audio.mp3',
			score: new PronunciationScore({
				pronunciation: 85,
				fluency: 80,
				coherence: 90
			}),
			feedback: new PronunciationFeedback({
				message: 'Good pronunciation overall',
				suggestions: ['Practice more']
			})
		});

		repository.findById = jest.fn().mockResolvedValue(analysis);

		const report = await generator.run(analysisId);

		expect(report).toEqual(analysis);
	});
});

