import { GlobalStatistics } from '../domain/GlobalStatistics';
import { StatisticsRepository } from '../domain/StatisticsRepository';

export class InMemoryStatisticsRepository implements StatisticsRepository {
	private latestStatistics: GlobalStatistics | null = null;

	async save(statistics: GlobalStatistics): Promise<void> {
		this.latestStatistics = statistics;
	}

	async findLatest(): Promise<GlobalStatistics | null> {
		return this.latestStatistics;
	}
}

