import { Task } from '../../../../src/Contexts/Tasks/domain/Task';
import { TaskRepository } from '../../../../src/Contexts/Tasks/domain/TaskRepository';

export class TaskRepositoryMock implements TaskRepository {
	public findByUserId = jest.fn();
	public findById = jest.fn();

	async save(task: Task): Promise<void> {
		await this.mockSave(task);
	}

	assertLastSavedTaskIs(expected: Task): void {
		const mock = this.mockSave.mock;
		const lastSavedTask = (mock.calls[mock.calls.length - 1] as Task[])[0];
		expect(lastSavedTask).toBeInstanceOf(Task);
		expect(lastSavedTask.id).toEqual(expected.id);
		expect(lastSavedTask.userId).toEqual(expected.userId);
	}

	private readonly mockSave = jest.fn();
}
