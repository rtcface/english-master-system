import { Report } from '../domain/Report';
import { ReportRepository } from '../domain/ReportRepository';

export class InMemoryReportRepository implements ReportRepository {
	private readonly reports: Map<string, Report> = new Map();

	async save(report: Report): Promise<void> {
		this.reports.set(report.id, report);

		return Promise.resolve();
	}

	async findById(id: string): Promise<Report | null> {
		const report = this.reports.get(id) ?? null;

		return Promise.resolve(report);
	}
}
