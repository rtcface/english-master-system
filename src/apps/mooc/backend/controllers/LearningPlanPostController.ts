import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { LearningPlanCreator } from '../../../../Contexts/Learning/application/LearningPlanCreator';
import { StudyGoal } from '../../../../Contexts/Learning/domain/StudyGoal';
import { UserLevel } from '../../../../Contexts/Learning/domain/UserLevel';
import { Controller } from './Controller';

export class LearningPlanPostController implements Controller {
	constructor(private readonly learningPlanCreator: LearningPlanCreator) {}

	async run(req: Request, res: Response): Promise<void> {
		const { id, userId, currentLevel, goal, dailyAvailability } = req.body as {
			id: string;
			userId: string;
			currentLevel: UserLevel;
			goal: StudyGoal;
			dailyAvailability: number;
		};

		await this.learningPlanCreator.run(id, userId, currentLevel, goal, dailyAvailability);

		res.status(httpStatus.CREATED).send();
	}
}
