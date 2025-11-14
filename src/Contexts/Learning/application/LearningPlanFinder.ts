import { LearningPlan } from '../domain/LearningPlan';
import { LearningPlanRepository } from '../domain/LearningPlanRepository';

export class LearningPlanFinder {
	private readonly repository: LearningPlanRepository;

	constructor(repository: LearningPlanRepository) {
		this.repository = repository;
	}

	async run(userId: string): Promise<LearningPlan | null> {
		return this.repository.findByUserId(userId);
	}
}
