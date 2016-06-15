'use strict';

const jsonApi = require('jsonapi-server'),
	Joi = jsonApi.Joi;

const MongoHandler = require('jsonapi-store-mongodb');

module.exports = {
	resource: 'cities',
	handlers: new MongoHandler({
    	url: "mongodb://localhost:27017/data",
  	}),
	attributes: {
		name: Joi.string(),
	}
};

