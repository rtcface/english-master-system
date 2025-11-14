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
	}

	async findByUserId(userId: string): Promise<Task[]> {
		const taskIds = this.userTasks.get(userId) ?? [];
		return taskIds.map(id => this.tasks.get(id)!).filter(Boolean);
	}

	async findById(id: string): Promise<Task | null> {
		return this.tasks.get(id) ?? null;
	}
}

