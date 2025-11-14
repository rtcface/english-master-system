import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { UserRole } from '../domain/UserRole';

export class UserCreator {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async run(id: string, email: string, name: string, role: UserRole): Promise<void> {
		const user = new User({ id, email, name, role });

		return this.repository.save(user);
	}
}

