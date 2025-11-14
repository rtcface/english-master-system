import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { StatisticsFinder } from '../../../../Contexts/Statistics/application/StatisticsFinder';
import { Controller } from './Controller';

export class StatisticsGetController implements Controller {
	constructor(private readonly statisticsFinder: StatisticsFinder) {}

	async run(req: Request, res: Response): Promise<void> {
		const statistics = await this.statisticsFinder.run();

		if (!statistics) {
			res.status(httpStatus.NOT_FOUND).send();

			return;
		}

		res.status(httpStatus.OK).json(statistics);
	}
}
