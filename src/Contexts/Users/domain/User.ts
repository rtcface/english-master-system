import { UserPermissions } from './UserPermissions';
import { UserRole } from './UserRole';

export class User {
	readonly id: string;
	readonly email: string;
	readonly name: string;
	readonly role: UserRole;
	readonly permissions: UserPermissions;

	constructor({
		id,
		email,
		name,
		role,
		permissions
	}: {
		id: string;
		email: string;
		name: string;
		role: UserRole;
		permissions?: UserPermissions;
	}) {
		this.id = id;
		this.email = email;
		this.name = name;
		this.role = role;
		this.permissions = permissions ?? UserPermissions.createForRole(role);
	}
}
