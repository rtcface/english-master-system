import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { PronunciationAnalyzer } from '../../../../Contexts/Pronunciation/application/PronunciationAnalyzer';
import { PronunciationFeedback } from '../../../../Contexts/Pronunciation/domain/PronunciationFeedback';
import { PronunciationScore } from '../../../../Contexts/Pronunciation/domain/PronunciationScore';
import { Controller } from './Controller';

export class PronunciationAnalysisPostController implements Controller {
	constructor(private readonly pronunciationAnalyzer: PronunciationAnalyzer) {}

	async run(req: Request, res: Response): Promise<void> {
		const { id, userId, audioUrl, score, feedback } = req.body as {
			id: string;
			userId: string;
			audioUrl: string;
			score: { pronunciation: number; fluency: number; coherence: number };
			feedback: { message: string; suggestions: string[] };
		};

		const pronunciationScore = new PronunciationScore(score);
		const pronunciationFeedback = new PronunciationFeedback(feedback);

		await this.pronunciationAnalyzer.run(
			id,
			userId,
			audioUrl,
			pronunciationScore,
			pronunciationFeedback
		);

		res.status(httpStatus.CREATED).send();
	}
}
