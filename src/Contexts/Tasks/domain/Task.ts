import { TaskType } from './TaskType';

export class Task {
	readonly id: string;
	readonly userId: string;
	readonly type: TaskType;
	readonly description: string;
	readonly profession?: string;
	readonly completed: boolean;
	readonly completedAt?: Date;

	constructor({
		id,
		userId,
		type,
		description,
		profession,
		completed,
		completedAt
	}: {
		id: string;
		userId: string;
		type: TaskType;
		description: string;
		profession?: string;
		completed?: boolean;
		completedAt?: Date;
	}) {
		this.id = id;
		this.userId = userId;
		this.type = type;
		this.description = description;
		this.profession = profession;
		this.completed = completed ?? false;
		this.completedAt = completedAt;
	}
}
