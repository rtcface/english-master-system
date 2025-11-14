import { Request, Response, Router } from 'express';

import { ProgressMetricsGetController } from '../controllers/ProgressMetricsGetController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const progressMetricsGetController = container.get<ProgressMetricsGetController>(
		'Apps.mooc.controllers.ProgressMetricsGetController'
	);

	router.get('/progress/metrics', (req: Request, res: Response) => {
		void progressMetricsGetController.run(req, res);
	});
};
