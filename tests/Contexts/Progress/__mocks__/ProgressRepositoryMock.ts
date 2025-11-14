import { ProgressMetrics } from '../../../../src/Contexts/Progress/domain/ProgressMetrics';
import { ProgressRepository } from '../../../../src/Contexts/Progress/domain/ProgressRepository';

export class ProgressRepositoryMock implements ProgressRepository {
	public findByUserIdAndWeek = jest.fn();
	public findByUserId = jest.fn();

	async save(progressMetrics: ProgressMetrics): Promise<void> {
		await this.mockSave(progressMetrics);
	}

	assertLastSavedProgressMetricsIs(expected: ProgressMetrics): void {
		const mock = this.mockSave.mock;
		const lastSavedMetrics = (mock.calls[mock.calls.length - 1] as ProgressMetrics[])[0];
		expect(lastSavedMetrics).toBeInstanceOf(ProgressMetrics);
		expect(lastSavedMetrics.id).toEqual(expected.id);
		expect(lastSavedMetrics.userId).toEqual(expected.userId);
	}

	private readonly mockSave = jest.fn();
}
