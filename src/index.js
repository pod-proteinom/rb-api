'use strict';

const jsonApi = require('jsonapi-server');

const cityResource = require('./resources').Cities; 

jsonApi.listen = (port, callback) => {
	jsonApi.setConfig({
		port
	});

	jsonApi.define(cityResource);

	jsonApi.start();

	if(callback) {
		process.nextTick(callback);
	}
};



module.exports = jsonApi;