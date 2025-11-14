import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class InMemoryTaskRepository implements TaskRepository {
	private readonly tasks: Map<string, Task> = new Map();
	private readonly userTasks: Map<string, string[]> = new Map(); // userId -> taskIds[]

	async save(task: Task): Promise<void> {
		this.tasks.set(task.id, task);
		const userTasks = this.userTasks.get(task.userId) ?? [];
		if (!userTasks.includes(task.id)) {
			userTasks.push(task.id);
			this.userTasks.set(task.userId, userTasks);
		}

		return Promise.resolve();
	}

	async findByUserId(userId: string): Promise<Task[]> {
		const taskIds = this.userTasks.get(userId) ?? [];

		const tasks = taskIds
			.map(id => this.tasks.get(id))
			.filter((task): task is Task => task !== undefined);

		return Promise.resolve(tasks);
	}

	async findById(id: string): Promise<Task | null> {
		const task = this.tasks.get(id) ?? null;

		return Promise.resolve(task);
	}
}
