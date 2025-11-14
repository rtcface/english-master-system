import { Request, Response, Router } from 'express';

import { UserPostController } from '../controllers/UserPostController';
import { UserRolePutController } from '../controllers/UserRolePutController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const userPostController = container.get<UserPostController>(
		'Apps.mooc.controllers.UserPostController'
	);
	const userRolePutController = container.get<UserRolePutController>(
		'Apps.mooc.controllers.UserRolePutController'
	);

	router.post('/users', (req: Request, res: Response) => {
		void userPostController.run(req, res);
	});
	router.put('/users/:id/role', (req: Request, res: Response) => {
		void userRolePutController.run(req, res);
	});
};
