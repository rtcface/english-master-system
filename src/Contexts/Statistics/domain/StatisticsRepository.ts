import { GlobalStatistics } from './GlobalStatistics';

export interface StatisticsRepository {
	save(statistics: GlobalStatistics): Promise<void>;
	findLatest(): Promise<GlobalStatistics | null>;
}
