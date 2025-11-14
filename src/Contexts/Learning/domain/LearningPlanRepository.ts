import { LearningPlan } from './LearningPlan';

export interface LearningPlanRepository {
	save(learningPlan: LearningPlan): Promise<void>;
	findByUserId(userId: string): Promise<LearningPlan | null>;
}

