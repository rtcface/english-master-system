import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { UserCreator } from '../../../../Contexts/Users/application/UserCreator';
import { UserRole } from '../../../../Contexts/Users/domain/UserRole';
import { Controller } from './Controller';

export class UserPostController implements Controller {
	constructor(private readonly userCreator: UserCreator) {}

	async run(req: Request, res: Response): Promise<void> {
		const { id, email, name, role } = req.body as {
			id: string;
			email: string;
			name: string;
			role: UserRole;
		};

		await this.userCreator.run(id, email, name, role);

		res.status(httpStatus.CREATED).send();
	}
}

