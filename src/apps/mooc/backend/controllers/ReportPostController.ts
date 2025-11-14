import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { ReportGenerator } from '../../../../Contexts/Reports/application/ReportGenerator';
import { ReportFormat } from '../../../../Contexts/Reports/domain/ReportFormat';
import { Controller } from './Controller';

export class ReportPostController implements Controller {
	constructor(private readonly reportGenerator: ReportGenerator) {}

	async run(req: Request, res: Response): Promise<void> {
		const { id, format, data, fileUrl } = req.body as {
			id: string;
			format: ReportFormat;
			data: Record<string, unknown>;
			fileUrl: string;
		};

		await this.reportGenerator.run(id, format, data, fileUrl);

		res.status(httpStatus.CREATED).send();
	}
}

