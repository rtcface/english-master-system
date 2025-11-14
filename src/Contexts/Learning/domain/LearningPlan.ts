import { StudyGoal } from './StudyGoal';
import { UserLevel } from './UserLevel';

export class LearningPlan {
	readonly id: string;
	readonly userId: string;
	readonly currentLevel: UserLevel;
	readonly goal: StudyGoal;
	readonly dailyAvailability: number; // minutes per day

	constructor({
		id,
		userId,
		currentLevel,
		goal,
		dailyAvailability
	}: {
		id: string;
		userId: string;
		currentLevel: UserLevel;
		goal: StudyGoal;
		dailyAvailability: number;
	}) {
		this.id = id;
		this.userId = userId;
		this.currentLevel = currentLevel;
		this.goal = goal;
		this.dailyAvailability = dailyAvailability;
	}
}

