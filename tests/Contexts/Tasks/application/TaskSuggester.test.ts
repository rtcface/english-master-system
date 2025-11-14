import { TaskSuggester } from '../../../../src/Contexts/Tasks/application/TaskSuggester';
import { Task } from '../../../../src/Contexts/Tasks/domain/Task';
import { TaskType } from '../../../../src/Contexts/Tasks/domain/TaskType';
import { TaskRepositoryMock } from '../__mocks__/TaskRepositoryMock';

let repository: TaskRepositoryMock;
let suggester: TaskSuggester;

beforeEach(() => {
	repository = new TaskRepositoryMock();
	suggester = new TaskSuggester(repository);
});

describe('TaskSuggester', () => {
	it('should suggest a new task based on user progress', async () => {
		const userId = 'user-id';
		const taskId = 'task-id';
		const taskType = TaskType.PROFESSIONAL;
		const description = 'Write a professional email';
		const profession = 'Software Engineer';

		const task = new Task({
			id: taskId,
			userId,
			type: taskType,
			description,
			profession
		});

		await suggester.run(userId, taskId, taskType, description, profession);

		repository.assertLastSavedTaskIs(task);
	});
});

