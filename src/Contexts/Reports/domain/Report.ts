import { ReportFormat } from './ReportFormat';

export class Report {
	readonly id: string;
	readonly format: ReportFormat;
	readonly data: Record<string, unknown>; // Anonymized data
	readonly fileUrl: string;
	readonly createdAt: Date;

	constructor({
		id,
		format,
		data,
		fileUrl,
		createdAt
	}: {
		id: string;
		format: ReportFormat;
		data: Record<string, unknown>;
		fileUrl: string;
		createdAt?: Date;
	}) {
		this.id = id;
		this.format = format;
		this.data = data;
		this.fileUrl = fileUrl;
		this.createdAt = createdAt ?? new Date();
	}
}

