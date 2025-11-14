import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class InMemoryUserRepository implements UserRepository {
	private readonly users: Map<string, User> = new Map();

	async save(user: User): Promise<void> {
		this.users.set(user.id, user);

		return Promise.resolve();
	}

	async find(id: string): Promise<User | null> {
		const user = this.users.get(id) ?? null;

		return Promise.resolve(user);
	}

	async findAll(): Promise<User[]> {
		return Promise.resolve(Array.from(this.users.values()));
	}
}
