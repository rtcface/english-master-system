import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { FeedbackFinder } from '../../../../Contexts/Feedback/application/FeedbackFinder';
import { Controller } from './Controller';

export class FeedbackGetController implements Controller {
	constructor(private readonly feedbackFinder: FeedbackFinder) {}

	async run(req: Request, res: Response): Promise<void> {
		const { taskId } = req.params;

		const feedback = await this.feedbackFinder.run(taskId);

		if (!feedback) {
			res.status(httpStatus.NOT_FOUND).send();

			return;
		}

		res.status(httpStatus.OK).json(feedback);
	}
}
