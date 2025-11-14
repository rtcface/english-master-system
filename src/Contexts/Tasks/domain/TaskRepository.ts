import { Task } from './Task';

export interface TaskRepository {
	save(task: Task): Promise<void>;
	findByUserId(userId: string): Promise<Task[]>;
	findById(id: string): Promise<Task | null>;
}
