import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { UserRoleAssigner } from '../../../../Contexts/Users/application/UserRoleAssigner';
import { UserRole } from '../../../../Contexts/Users/domain/UserRole';
import { Controller } from './Controller';

export class UserRolePutController implements Controller {
	constructor(private readonly userRoleAssigner: UserRoleAssigner) {}

	async run(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const { role } = req.body as { role: UserRole };

		await this.userRoleAssigner.run(id, role);

		res.status(httpStatus.OK).send();
	}
}
