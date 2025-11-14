import { ProgressMetrics } from '../domain/ProgressMetrics';
import { ProgressRepository } from '../domain/ProgressRepository';

export class InMemoryProgressRepository implements ProgressRepository {
	private readonly metrics: Map<string, ProgressMetrics> = new Map();
	private readonly userMetrics: Map<string, string[]> = new Map(); // userId -> metricIds[]

	async save(progressMetrics: ProgressMetrics): Promise<void> {
		const key = `${progressMetrics.userId}-${progressMetrics.week}`;
		this.metrics.set(key, progressMetrics);
		const userMetricIds = this.userMetrics.get(progressMetrics.userId) ?? [];
		if (!userMetricIds.includes(key)) {
			userMetricIds.push(key);
			this.userMetrics.set(progressMetrics.userId, userMetricIds);
		}
	}

	async findByUserIdAndWeek(userId: string, week: number): Promise<ProgressMetrics | null> {
		const key = `${userId}-${week}`;

		return this.metrics.get(key) ?? null;
	}

	async findByUserId(userId: string): Promise<ProgressMetrics[]> {
		const metricIds = this.userMetrics.get(userId) ?? [];

		return metricIds.map(id => this.metrics.get(id)!).filter(Boolean);
	}
}
