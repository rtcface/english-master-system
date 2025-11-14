import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class TaskCompleter {
	private readonly repository: TaskRepository;

	constructor(repository: TaskRepository) {
		this.repository = repository;
	}

	async run(taskId: string): Promise<void> {
		const task = await this.repository.findById(taskId);

		if (!task) {
			throw new Error(`Task with id ${taskId} not found`);
		}

		const completedTask = new Task({
			id: task.id,
			userId: task.userId,
			type: task.type,
			description: task.description,
			profession: task.profession,
			completed: true,
			completedAt: new Date()
		});

		return this.repository.save(completedTask);
	}
}

