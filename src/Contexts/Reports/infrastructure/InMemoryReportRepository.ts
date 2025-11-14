import { Report } from '../domain/Report';
import { ReportRepository } from '../domain/ReportRepository';

export class InMemoryReportRepository implements ReportRepository {
	private readonly reports: Map<string, Report> = new Map();

	async save(report: Report): Promise<void> {
		this.reports.set(report.id, report);
	}

	async findById(id: string): Promise<Report | null> {
		return this.reports.get(id) ?? null;
	}
}

