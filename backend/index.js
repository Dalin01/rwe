'use strict';

const config = require('./config');
const start = require('./server');

start(config.PORT);