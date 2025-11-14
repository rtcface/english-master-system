import { LearningPlan } from '../../../../../src/Contexts/Learning/domain/LearningPlan';
import { LearningPlanRepository } from '../../../../../src/Contexts/Learning/domain/LearningPlanRepository';

export class LearningPlanRepositoryMock implements LearningPlanRepository {
	private readonly mockSave = jest.fn();
	public findByUserId = jest.fn();

	async save(learningPlan: LearningPlan): Promise<void> {
		await this.mockSave(learningPlan);
	}

	assertLastSavedLearningPlanIs(expected: LearningPlan): void {
		const mock = this.mockSave.mock;
		const lastSavedPlan = (mock.calls[mock.calls.length - 1] as LearningPlan[])[0];
		expect(lastSavedPlan).toBeInstanceOf(LearningPlan);
		expect(lastSavedPlan.id).toEqual(expected.id);
		expect(lastSavedPlan.userId).toEqual(expected.userId);
	}

	assertFindByUserIdWasCalledWith(userId: string): void {
		expect(this.findByUserId).toHaveBeenCalledWith(userId);
	}
}

