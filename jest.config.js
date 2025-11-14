module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	cacheDirectory: '.tmp/jestCache',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transform: {
		'^.+\\.ts$': ['ts-jest', {
			isolatedModules: true
		}]
	}
};
