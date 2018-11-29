'use strict';

const ApiGateway = require('moleculer-web');

module.exports = {
	name: 'api',
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: '/api',
			whitelist: [
				// Access to any actions in all services under '/api' URL
				'**'
			],
		}],
	},

  events: {
    'test.event'(payload) {
      this.logger.info(`Test event received with payload: ${JSON.stringify(payload)}`);
    }
  },
};
