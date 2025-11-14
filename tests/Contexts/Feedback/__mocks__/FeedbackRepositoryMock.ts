import { Feedback } from '../../../../src/Contexts/Feedback/domain/Feedback';
import { FeedbackRepository } from '../../../../src/Contexts/Feedback/domain/FeedbackRepository';

export class FeedbackRepositoryMock implements FeedbackRepository {
	public findByTaskId = jest.fn();

	async save(feedback: Feedback): Promise<void> {
		await this.mockSave(feedback);
	}

	assertLastSavedFeedbackIs(expected: Feedback): void {
		const mock = this.mockSave.mock;
		const lastSavedFeedback = (mock.calls[mock.calls.length - 1] as Feedback[])[0];
		expect(lastSavedFeedback).toBeInstanceOf(Feedback);
		expect(lastSavedFeedback.id).toEqual(expected.id);
		expect(lastSavedFeedback.taskId).toEqual(expected.taskId);
	}

	private readonly mockSave = jest.fn();
}
