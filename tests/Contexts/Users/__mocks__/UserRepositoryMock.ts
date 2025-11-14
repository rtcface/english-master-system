import { User } from '../../../../src/Contexts/Users/domain/User';
import { UserRepository } from '../../../../src/Contexts/Users/domain/UserRepository';

export class UserRepositoryMock implements UserRepository {
	private readonly mockSave = jest.fn();
	public find = jest.fn();
	public findAll = jest.fn();

	async save(user: User): Promise<void> {
		await this.mockSave(user);
	}

	assertLastSavedUserIs(expected: User): void {
		const mock = this.mockSave.mock;
		const lastSavedUser = (mock.calls[mock.calls.length - 1] as User[])[0];
		expect(lastSavedUser).toBeInstanceOf(User);
		expect(lastSavedUser.id).toEqual(expected.id);
		expect(lastSavedUser.email).toEqual(expected.email);
	}

	assertFindWasCalledWith(id: string): void {
		expect(this.find).toHaveBeenCalledWith(id);
	}

	assertFindAllWasCalled(): void {
		expect(this.findAll).toHaveBeenCalled();
	}
}

