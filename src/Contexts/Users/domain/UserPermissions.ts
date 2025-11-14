import { UserRole } from './UserRole';

export class UserPermissions {
	readonly canViewStatistics: boolean;
	readonly canExportReports: boolean;
	readonly canManageUsers: boolean;
	readonly canAccessResearchData: boolean;

	constructor({
		canViewStatistics,
		canExportReports,
		canManageUsers,
		canAccessResearchData
	}: {
		canViewStatistics: boolean;
		canExportReports: boolean;
		canManageUsers: boolean;
		canAccessResearchData: boolean;
	}) {
		this.canViewStatistics = canViewStatistics;
		this.canExportReports = canExportReports;
		this.canManageUsers = canManageUsers;
		this.canAccessResearchData = canAccessResearchData;
	}

	static createForRole(role: UserRole): UserPermissions {
		switch (role) {
			case UserRole.LEARNER:
				return new UserPermissions({
					canViewStatistics: false,
					canExportReports: false,
					canManageUsers: false,
					canAccessResearchData: false
				});
			case UserRole.TUTOR_IA:
				return new UserPermissions({
					canViewStatistics: false,
					canExportReports: false,
					canManageUsers: false,
					canAccessResearchData: false
				});
			case UserRole.RESEARCHER:
				return new UserPermissions({
					canViewStatistics: true,
					canExportReports: true,
					canManageUsers: false,
					canAccessResearchData: true
				});
		}
	}
}
