import { Report } from '../../../../src/Contexts/Reports/domain/Report';
import { ReportRepository } from '../../../../src/Contexts/Reports/domain/ReportRepository';

export class ReportRepositoryMock implements ReportRepository {
	private readonly mockSave = jest.fn();
	public findById = jest.fn();

	async save(report: Report): Promise<void> {
		await this.mockSave(report);
	}


	assertLastSavedReportIs(expected: Report): void {
		const mock = this.mockSave.mock;
		const lastSavedReport = (mock.calls[mock.calls.length - 1] as Report[])[0];
		expect(lastSavedReport).toBeInstanceOf(Report);
		expect(lastSavedReport.id).toEqual(expected.id);
		expect(lastSavedReport.format).toEqual(expected.format);
	}
}

