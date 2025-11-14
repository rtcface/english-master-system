import { LearningPlan } from '../domain/LearningPlan';
import { LearningPlanRepository } from '../domain/LearningPlanRepository';

export class InMemoryLearningPlanRepository implements LearningPlanRepository {
	private readonly learningPlans: Map<string, LearningPlan> = new Map();
	private readonly userPlans: Map<string, string> = new Map(); // userId -> planId

	async save(learningPlan: LearningPlan): Promise<void> {
		this.learningPlans.set(learningPlan.id, learningPlan);
		this.userPlans.set(learningPlan.userId, learningPlan.id);
	}

	async findByUserId(userId: string): Promise<LearningPlan | null> {
		const planId = this.userPlans.get(userId);
		if (!planId) {
			return null;
		}

		return this.learningPlans.get(planId) ?? null;
	}
}
