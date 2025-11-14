import { LearningPlanCreator } from '../../../../../src/Contexts/Learning/application/LearningPlanCreator';
import { LearningPlan } from '../../../../../src/Contexts/Learning/domain/LearningPlan';
import { StudyGoal } from '../../../../../src/Contexts/Learning/domain/StudyGoal';
import { UserLevel } from '../../../../../src/Contexts/Learning/domain/UserLevel';
import { LearningPlanRepositoryMock } from '../__mocks__/LearningPlanRepositoryMock';

let repository: LearningPlanRepositoryMock;
let creator: LearningPlanCreator;

beforeEach(() => {
	repository = new LearningPlanRepositoryMock();
	creator = new LearningPlanCreator(repository);
});

describe('LearningPlanCreator', () => {
	it('should create a valid learning plan', async () => {
		const id = 'plan-id';
		const userId = 'user-id';
		const currentLevel = UserLevel.B1;
		const goal = StudyGoal.C2;
		const dailyAvailability = 60; // minutes

		const learningPlan = new LearningPlan({
			id,
			userId,
			currentLevel,
			goal,
			dailyAvailability
		});

		await creator.run(id, userId, currentLevel, goal, dailyAvailability);

		repository.assertLastSavedLearningPlanIs(learningPlan);
	});
});

