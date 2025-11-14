import { Request, Response, Router } from 'express';

import { LearningPlanPostController } from '../controllers/LearningPlanPostController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const learningPlanPostController = container.get<LearningPlanPostController>(
		'Apps.mooc.controllers.LearningPlanPostController'
	);

	router.post('/learning-plans', (req: Request, res: Response) =>
		learningPlanPostController.run(req, res)
	);
};

