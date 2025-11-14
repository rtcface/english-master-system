import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { TaskSuggester } from '../../../../Contexts/Tasks/application/TaskSuggester';
import { TaskType } from '../../../../Contexts/Tasks/domain/TaskType';
import { Controller } from './Controller';

export class TaskSuggestionGetController implements Controller {
	constructor(private readonly taskSuggester: TaskSuggester) {}

	async run(req: Request, res: Response): Promise<void> {
		const { userId } = req.query as { userId: string };
		const taskId = `task-${Date.now()}`;
		const type = TaskType.PROFESSIONAL;
		const description = 'Complete a professional task';
		const profession = req.query.profession as string | undefined;

		await this.taskSuggester.run(userId, taskId, type, description, profession);

		res.status(httpStatus.OK).json({ taskId, type, description, profession });
	}
}
