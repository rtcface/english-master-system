export class PronunciationFeedback {
	readonly message: string;
	readonly suggestions: string[];

	constructor({ message, suggestions }: { message: string; suggestions: string[] }) {
		this.message = message;
		this.suggestions = suggestions;
	}
}
