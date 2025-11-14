import { GlobalStatistics } from '../../../../../src/Contexts/Statistics/domain/GlobalStatistics';
import { StatisticsRepository } from '../../../../../src/Contexts/Statistics/domain/StatisticsRepository';

export class StatisticsRepositoryMock implements StatisticsRepository {
	private readonly mockSave = jest.fn();
	public findLatest = jest.fn();

	async save(statistics: GlobalStatistics): Promise<void> {
		await this.mockSave(statistics);
	}


	assertLastSavedStatisticsIs(expected: GlobalStatistics): void {
		const mock = this.mockSave.mock;
		const lastSavedStats = (mock.calls[mock.calls.length - 1] as GlobalStatistics[])[0];
		expect(lastSavedStats).toBeInstanceOf(GlobalStatistics);
		expect(lastSavedStats.id).toEqual(expected.id);
	}
}

