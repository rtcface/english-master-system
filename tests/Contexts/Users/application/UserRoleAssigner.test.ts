import { UserRoleAssigner } from '../../../../src/Contexts/Users/application/UserRoleAssigner';
import { User } from '../../../../src/Contexts/Users/domain/User';
import { UserPermissions } from '../../../../src/Contexts/Users/domain/UserPermissions';
import { UserRole } from '../../../../src/Contexts/Users/domain/UserRole';
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock';

let repository: UserRepositoryMock;
let assigner: UserRoleAssigner;

beforeEach(() => {
	repository = new UserRepositoryMock();
	assigner = new UserRoleAssigner(repository);
});

describe('UserRoleAssigner', () => {
	it('should assign role and permissions to a user', async () => {
		const userId = 'some-id';
		const email = 'user@example.com';
		const name = 'John Doe';
		const existingUser = new User({ id: userId, email, name, role: UserRole.LEARNER });

		repository.find = jest.fn().mockResolvedValue(existingUser);

		const newRole = UserRole.RESEARCHER;
		const permissions = UserPermissions.createForRole(newRole);

		await assigner.run(userId, newRole);

		repository.assertLastSavedUserIs(
			new User({ id: userId, email, name, role: newRole, permissions })
		);
		repository.assertFindWasCalledWith(userId);
	});
});
