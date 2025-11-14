import { LearningPlan } from '../domain/LearningPlan';
import { LearningPlanRepository } from '../domain/LearningPlanRepository';
import { StudyGoal } from '../domain/StudyGoal';
import { UserLevel } from '../domain/UserLevel';

export class LearningPlanCreator {
	private readonly repository: LearningPlanRepository;

	constructor(repository: LearningPlanRepository) {
		this.repository = repository;
	}

	async run(
		id: string,
		userId: string,
		currentLevel: UserLevel,
		goal: StudyGoal,
		dailyAvailability: number
	): Promise<void> {
		const learningPlan = new LearningPlan({
			id,
			userId,
			currentLevel,
			goal,
			dailyAvailability
		});

		return this.repository.save(learningPlan);
	}
}

