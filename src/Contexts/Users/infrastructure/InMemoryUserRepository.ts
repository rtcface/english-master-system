import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class InMemoryUserRepository implements UserRepository {
	private readonly users: Map<string, User> = new Map();

	async save(user: User): Promise<void> {
		this.users.set(user.id, user);
	}

	async find(id: string): Promise<User | null> {
		return this.users.get(id) ?? null;
	}

	async findAll(): Promise<User[]> {
		return Array.from(this.users.values());
	}
}

