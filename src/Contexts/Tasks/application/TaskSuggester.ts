import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';
import { TaskType } from '../domain/TaskType';

export class TaskSuggester {
	private readonly repository: TaskRepository;

	constructor(repository: TaskRepository) {
		this.repository = repository;
	}

	async run(
		userId: string,
		taskId: string,
		type: TaskType,
		description: string,
		profession?: string
	): Promise<void> {
		const task = new Task({
			id: taskId,
			userId,
			type,
			description,
			profession
		});

		return this.repository.save(task);
	}
}
