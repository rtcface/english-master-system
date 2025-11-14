import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserFinder {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async run(id: string): Promise<User | null> {
		return this.repository.find(id);
	}

	async findAll(): Promise<User[]> {
		return this.repository.findAll();
	}
}

