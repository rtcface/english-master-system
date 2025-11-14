import { Report } from '../domain/Report';
import { ReportFormat } from '../domain/ReportFormat';
import { ReportRepository } from '../domain/ReportRepository';

export class ReportGenerator {
	private readonly repository: ReportRepository;

	constructor(repository: ReportRepository) {
		this.repository = repository;
	}

	async run(
		id: string,
		format: ReportFormat,
		data: Record<string, unknown>,
		fileUrl: string
	): Promise<void> {
		const report = new Report({
			id,
			format,
			data,
			fileUrl
		});

		return this.repository.save(report);
	}
}
