import { ReportGenerator } from '../../../../src/Contexts/Reports/application/ReportGenerator';
import { Report } from '../../../../src/Contexts/Reports/domain/Report';
import { ReportFormat } from '../../../../src/Contexts/Reports/domain/ReportFormat';
import { ReportRepositoryMock } from '../__mocks__/ReportRepositoryMock';

let repository: ReportRepositoryMock;
let generator: ReportGenerator;

beforeEach(() => {
	repository = new ReportRepositoryMock();
	generator = new ReportGenerator(repository);
});

describe('ReportGenerator', () => {
	it('should generate a report in PDF format with anonymized data', async () => {
		const id = 'report-id';
		const format = ReportFormat.PDF;
		const data = { anonymized: true, statistics: [] };
		const fileUrl = 'https://example.com/report.pdf';

		const report = new Report({
			id,
			format,
			data,
			fileUrl
		});

		await generator.run(id, format, data, fileUrl);

		repository.assertLastSavedReportIs(report);
	});

	it('should generate a report in CSV format with anonymized data', async () => {
		const id = 'report-id';
		const format = ReportFormat.CSV;
		const data = { anonymized: true, statistics: [] };
		const fileUrl = 'https://example.com/report.csv';

		const report = new Report({
			id,
			format,
			data,
			fileUrl
		});

		await generator.run(id, format, data, fileUrl);

		repository.assertLastSavedReportIs(report);
	});
});
