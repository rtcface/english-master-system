import { GlobalStatistics } from '../domain/GlobalStatistics';
import { StatisticsRepository } from '../domain/StatisticsRepository';

export class StatisticsFinder {
	private readonly repository: StatisticsRepository;

	constructor(repository: StatisticsRepository) {
		this.repository = repository;
	}

	async run(): Promise<GlobalStatistics | null> {
		return this.repository.findLatest();
	}
}

