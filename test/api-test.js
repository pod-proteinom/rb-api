'use strict';

const chai = require('chai'),
	assert = chai.assert;

const fetch = require('node-fetch'),
	co = require('co'),
	conf = require('config');

const jsonApiServer = require('../src/index.js');

describe('Rest API', () => {
	before(done => jsonApiServer.listen(6000, done));
	after(() => jsonApiServer.close());

	it('Get all cities /cities', co.wrap(function* (){
		const response = yield fetch('http://localhost:6000/cities');
		assert(response.ok, '/cities response');
	}));

	// it('Get all categories by city /categories/cityId', co.wrap(function* (){
	// 	const cityId = '1';
	// 	const response = yield fetch(conf.get('address') + 'categories/' + cityId);
	// 	assert(response.ok, '/categories/cityId response');
	// }));

	// it('Get all subcategories by category /categories/topCategoryId', co.wrap(function* (){
	// 	const topCategoryId = '1';
	// 	const response = yield fetch(conf.get('address') + 'categories/' + topCategoryId);
	// 	assert(response.ok, '/categories/topCategoryId response');
	// }));

	// it('Get all organizations by category /organizations/categoryId', co.wrap(function* (){
	// 	const categoryId = '1';
	// 	const response = yield fetch(conf.get('address') + 'organizations/' + categoryId);
	// 	assert(response.ok, '/organizations/categoryId response');
	// }));

	// it('Get all info about organization /organization/organizationId', co.wrap(function* (){
	// 	const organizationId = '1';
	// 	const response = yield fetch(conf.get('address') + 'organization/' + organizationId);
	// 	assert(response.ok, '/organization/organizationId response');
	// }));
});