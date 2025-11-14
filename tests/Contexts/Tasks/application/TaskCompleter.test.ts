import { TaskCompleter } from '../../../../src/Contexts/Tasks/application/TaskCompleter';
import { Task } from '../../../../src/Contexts/Tasks/domain/Task';
import { TaskType } from '../../../../src/Contexts/Tasks/domain/TaskType';
import { TaskRepositoryMock } from '../__mocks__/TaskRepositoryMock';

let repository: TaskRepositoryMock;
let completer: TaskCompleter;

beforeEach(() => {
	repository = new TaskRepositoryMock();
	completer = new TaskCompleter(repository);
});

describe('TaskCompleter', () => {
	it('should mark a task as completed', async () => {
		const taskId = 'task-id';
		const userId = 'user-id';
		const existingTask = new Task({
			id: taskId,
			userId,
			type: TaskType.PROFESSIONAL,
			description: 'Write a professional email',
			profession: 'Software Engineer',
			completed: false
		});

		repository.findById = jest.fn().mockResolvedValue(existingTask);

		await completer.run(taskId);

		const completedTask = new Task({
			...existingTask,
			completed: true
		});

		repository.assertLastSavedTaskIs(completedTask);
	});
});

