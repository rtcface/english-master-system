import { Report } from '../domain/Report';
import { ReportRepository } from '../domain/ReportRepository';

export class ReportExporter {
	private readonly repository: ReportRepository;

	constructor(repository: ReportRepository) {
		this.repository = repository;
	}

	async run(reportId: string): Promise<Report> {
		const report = await this.repository.findById(reportId);

		if (!report) {
			throw new Error(`Report with id ${reportId} not found`);
		}

		return report;
	}
}

