import { Request, Response, Router } from 'express';

import { StatisticsGetController } from '../controllers/StatisticsGetController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const statisticsGetController = container.get<StatisticsGetController>(
		'Apps.mooc.controllers.StatisticsGetController'
	);

	router.get('/statistics/global', (req: Request, res: Response) => {
		void statisticsGetController.run(req, res);
	});
};
