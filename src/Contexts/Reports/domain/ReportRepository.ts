import { Report } from './Report';

export interface ReportRepository {
	save(report: Report): Promise<void>;
	findById(id: string): Promise<Report | null>;
}

