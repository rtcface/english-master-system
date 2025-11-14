import { Request, Response, Router } from 'express';

import { FeedbackGetController } from '../controllers/FeedbackGetController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const feedbackGetController = container.get<FeedbackGetController>(
		'Apps.mooc.controllers.FeedbackGetController'
	);

	router.get('/feedback/:taskId', (req: Request, res: Response) => {
		void feedbackGetController.run(req, res);
	});
};
