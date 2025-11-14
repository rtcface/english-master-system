import { Request, Response, Router } from 'express';

import { ReportPostController } from '../controllers/ReportPostController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const reportPostController = container.get<ReportPostController>(
		'Apps.mooc.controllers.ReportPostController'
	);

	router.post('/reports/generate', (req: Request, res: Response) => reportPostController.run(req, res));
};

