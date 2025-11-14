import { ProgressMetrics } from '../domain/ProgressMetrics';
import { ProgressRepository } from '../domain/ProgressRepository';

export class ProgressMetricsFinder {
	private readonly repository: ProgressRepository;

	constructor(repository: ProgressRepository) {
		this.repository = repository;
	}

	async run(userId: string, week: number): Promise<ProgressMetrics | null> {
		return this.repository.findByUserIdAndWeek(userId, week);
	}

	async findAll(userId: string): Promise<ProgressMetrics[]> {
		return this.repository.findByUserId(userId);
	}
}
