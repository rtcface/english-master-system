import { ProgressMetrics } from './ProgressMetrics';

export interface ProgressRepository {
	save(progressMetrics: ProgressMetrics): Promise<void>;
	findByUserIdAndWeek(userId: string, week: number): Promise<ProgressMetrics | null>;
	findByUserId(userId: string): Promise<ProgressMetrics[]>;
}
