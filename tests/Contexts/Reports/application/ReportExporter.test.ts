import { ReportExporter } from '../../../../../src/Contexts/Reports/application/ReportExporter';
import { Report } from '../../../../../src/Contexts/Reports/domain/Report';
import { ReportFormat } from '../../../../../src/Contexts/Reports/domain/ReportFormat';
import { ReportRepositoryMock } from '../__mocks__/ReportRepositoryMock';

let repository: ReportRepositoryMock;
let exporter: ReportExporter;

beforeEach(() => {
	repository = new ReportRepositoryMock();
	exporter = new ReportExporter(repository);
});

describe('ReportExporter', () => {
	it('should export a report by id', async () => {
		const reportId = 'report-id';
		const report = new Report({
			id: reportId,
			format: ReportFormat.PDF,
			data: { anonymized: true, statistics: [] },
			fileUrl: 'https://example.com/report.pdf'
		});

		repository.findById = jest.fn().mockResolvedValue(report);

		const exportedReport = await exporter.run(reportId);

		expect(exportedReport).toEqual(report);
	});

	it('should throw error when report is not found', async () => {
		const reportId = 'non-existent-report';

		repository.findById = jest.fn().mockResolvedValue(null);

		await expect(exporter.run(reportId)).rejects.toThrow(
			`Report with id ${reportId} not found`
		);
	});
});

