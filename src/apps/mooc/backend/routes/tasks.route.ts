import { Request, Response, Router } from 'express';

import { TaskSuggestionGetController } from '../controllers/TaskSuggestionGetController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const taskSuggestionGetController = container.get<TaskSuggestionGetController>(
		'Apps.mooc.controllers.TaskSuggestionGetController'
	);

	router.get('/tasks/suggestions', (req: Request, res: Response) =>
		taskSuggestionGetController.run(req, res)
	);
};

