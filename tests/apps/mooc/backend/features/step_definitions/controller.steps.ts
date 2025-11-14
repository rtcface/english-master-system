import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then, When } from 'cucumber';
import request from 'supertest';

import { MoocBackendApp } from '../../../../../../src/apps/mooc/backend/MoocBackendApp';

let _request: request.Test;
let application: MoocBackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
	_response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
	_request = request(application.httpServer)
		.put(route)
		.send(JSON.parse(body) as object);
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
	_request = request(application.httpServer)
		.post(route)
		.send(JSON.parse(body) as object);
});

When('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

When('I send a POST request to {string} with body:', (route: string, body: string) => {
	_request = request(application.httpServer)
		.post(route)
		.send(JSON.parse(body) as object);
});

Then('the response should be empty', () => {
	assert.deepStrictEqual(_response.body, {});
});

Then('the response should contain a task suggestion', () => {
	assert(_response.body.taskId !== undefined);
	assert(_response.body.type !== undefined);
	assert(_response.body.description !== undefined);
});

Then('the response should contain progress metrics', () => {
	assert(_response.body !== null);
});

Then('the response should contain feedback recommendations', () => {
	assert(_response.body !== null);
	assert(_response.body.recommendations !== undefined);
});

Then('the response should contain aggregated statistics', () => {
	assert(_response.body !== null);
	assert(_response.body.totalUsers !== undefined);
});

BeforeAll(async () => {
	application = new MoocBackendApp();
	await application.start();
});

AfterAll(async () => {
	await application.stop();
});
