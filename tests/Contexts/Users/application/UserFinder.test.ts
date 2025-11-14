import { UserFinder } from '../../../../src/Contexts/Users/application/UserFinder';
import { User } from '../../../../src/Contexts/Users/domain/User';
import { UserRole } from '../../../../src/Contexts/Users/domain/UserRole';
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';

let repository: UserRepositoryMock;
let finder: UserFinder;

beforeEach(() => {
	repository = new UserRepositoryMock();
	finder = new UserFinder(repository);
});

describe('UserFinder', () => {
	it('should find a user by id', async () => {
		const userId = 'some-id';
		const user = new User({
			id: userId,
			email: 'user@example.com',
			name: 'John Doe',
			role: UserRole.LEARNER
		});

		repository.find = jest.fn().mockResolvedValue(user);

		const foundUser = await finder.run(userId);

		expect(foundUser).toEqual(user);
		repository.assertFindWasCalledWith(userId);
	});

	it('should return null when user is not found', async () => {
		const userId = 'non-existent-id';

		repository.find = jest.fn().mockResolvedValue(null);

		const foundUser = await finder.run(userId);

		expect(foundUser).toBeNull();
		repository.assertFindWasCalledWith(userId);
	});

	it('should find all users', async () => {
		const users = [
			new User({
				id: 'id1',
				email: 'user1@example.com',
				name: 'User One',
				role: UserRole.LEARNER
			}),
			new User({
				id: 'id2',
				email: 'user2@example.com',
				name: 'User Two',
				role: UserRole.RESEARCHER
			})
		];

		repository.findAll = jest.fn().mockResolvedValue(users);

		const foundUsers = await finder.findAll();

		expect(foundUsers).toEqual(users);
		repository.assertFindAllWasCalled();
	});
});
