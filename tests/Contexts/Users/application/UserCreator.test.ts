import { UserCreator } from '../../../../src/Contexts/Users/application/UserCreator';
import { User } from '../../../../src/Contexts/Users/domain/User';
import { UserRole } from '../../../../src/Contexts/Users/domain/UserRole';
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';

let repository: UserRepositoryMock;
let creator: UserCreator;

beforeEach(() => {
	repository = new UserRepositoryMock();
	creator = new UserCreator(repository);
});

describe('UserCreator', () => {
	it('should create a valid user', async () => {
		const id = 'some-id';
		const email = 'user@example.com';
		const name = 'John Doe';
		const role = UserRole.LEARNER;

		const user = new User({ id, email, name, role });

		await creator.run(id, email, name, role);

		repository.assertLastSavedUserIs(user);
	});
});

