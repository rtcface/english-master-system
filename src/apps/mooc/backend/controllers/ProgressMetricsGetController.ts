import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { ProgressMetricsFinder } from '../../../../Contexts/Progress/application/ProgressMetricsFinder';
import { Controller } from './Controller';

export class ProgressMetricsGetController implements Controller {
	constructor(private readonly progressMetricsFinder: ProgressMetricsFinder) {}

	async run(req: Request, res: Response): Promise<void> {
		const { userId, week } = req.query as { userId: string; week?: string };

		if (week) {
			const metrics = await this.progressMetricsFinder.run(userId, parseInt(week, 10));
			if (!metrics) {
				res.status(httpStatus.NOT_FOUND).send();

				return;
			}
			res.status(httpStatus.OK).json(metrics);
		} else {
			const metrics = await this.progressMetricsFinder.findAll(userId);
			res.status(httpStatus.OK).json(metrics);
		}
	}
}
