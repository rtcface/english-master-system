import { User } from '../domain/User';
import { UserPermissions } from '../domain/UserPermissions';
import { UserRepository } from '../domain/UserRepository';
import { UserRole } from '../domain/UserRole';

export class UserRoleAssigner {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async run(userId: string, role: UserRole): Promise<void> {
		const user = await this.repository.find(userId);

		if (!user) {
			throw new Error(`User with id ${userId} not found`);
		}

		const permissions = UserPermissions.createForRole(role);
		const updatedUser = new User({
			id: user.id,
			email: user.email,
			name: user.name,
			role,
			permissions
		});

		return this.repository.save(updatedUser);
	}
}
