import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then, When } from 'cucumber';
import request from 'supertest';

import { MoocBackendApp } from '../../../../../../src/apps/mooc/backend/MoocBackendApp';

interface TaskSuggestionResponseBody {
	taskId?: string;
	type?: string;
	description?: string;
}

interface FeedbackRecommendationsResponseBody {
	recommendations?: unknown;
}

interface AggregatedStatisticsResponseBody {
	totalUsers?: unknown;
}

let _request: request.Test;
let application!: MoocBackendApp;
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
	const body = _response.body as unknown as TaskSuggestionResponseBody;
	assert(body.taskId !== undefined);
	assert(body.type !== undefined);
	assert(body.description !== undefined);
});

Then('the response should contain progress metrics', () => {
	assert(_response.body !== null);
});

Then('the response should contain feedback recommendations', () => {
	const body = _response.body as unknown as FeedbackRecommendationsResponseBody | null;
	assert(body !== null);
	assert(body.recommendations !== undefined);
});

Then('the response should contain aggregated statistics', () => {
	const body = _response.body as unknown as AggregatedStatisticsResponseBody | null;
	assert(body !== null);
	assert(body.totalUsers !== undefined);
});

BeforeAll(done => {
	void (async () => {
		application = new MoocBackendApp();
		await application.start();
		done();
	})();
});

AfterAll(done => {
	void (async () => {
		await application.stop();
		done();
	})();
});
