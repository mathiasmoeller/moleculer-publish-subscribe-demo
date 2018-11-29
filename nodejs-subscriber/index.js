'use strict';
const URL = process.env.NATS_URL;

const NATS = require('nats');
const nats = NATS.connect({url: URL, name: 'nodejs-subscriber'});


nats.subscribe('MOL-moleculer-test.>', message => {
  console.log(`nodejs-subscriber: Test event received with payload: ${message}`);
});