import { LearningPlanFinder } from '../../../../src/Contexts/Learning/application/LearningPlanFinder';
import { LearningPlan } from '../../../../src/Contexts/Learning/domain/LearningPlan';
import { StudyGoal } from '../../../../src/Contexts/Learning/domain/StudyGoal';
import { UserLevel } from '../../../../src/Contexts/Learning/domain/UserLevel';
import { LearningPlanRepositoryMock } from '../__mocks__/LearningPlanRepositoryMock';

let repository: LearningPlanRepositoryMock;
let finder: LearningPlanFinder;

beforeEach(() => {
	repository = new LearningPlanRepositoryMock();
	finder = new LearningPlanFinder(repository);
});

describe('LearningPlanFinder', () => {
	it('should find a learning plan by user id', async () => {
		const userId = 'user-id';
		const learningPlan = new LearningPlan({
			id: 'plan-id',
			userId,
			currentLevel: UserLevel.B1,
			goal: StudyGoal.C2,
			dailyAvailability: 60
		});

		repository.findByUserId = jest.fn().mockResolvedValue(learningPlan);

		const foundPlan = await finder.run(userId);

		expect(foundPlan).toEqual(learningPlan);
		repository.assertFindByUserIdWasCalledWith(userId);
	});

	it('should return null when learning plan is not found', async () => {
		const userId = 'non-existent-user';

		repository.findByUserId = jest.fn().mockResolvedValue(null);

		const foundPlan = await finder.run(userId);

		expect(foundPlan).toBeNull();
		repository.assertFindByUserIdWasCalledWith(userId);
	});
});

