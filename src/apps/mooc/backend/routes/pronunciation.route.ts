import { Request, Response, Router } from 'express';

import { PronunciationAnalysisPostController } from '../controllers/PronunciationAnalysisPostController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const pronunciationAnalysisPostController = container.get<PronunciationAnalysisPostController>(
		'Apps.mooc.controllers.PronunciationAnalysisPostController'
	);

	router.post('/pronunciation/analyze', (req: Request, res: Response) => {
		void pronunciationAnalysisPostController.run(req, res);
	});
};
