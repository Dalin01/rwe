'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./router');

const start = (port) => {
  const app = express();
  app.use(cors());
  app.use(router);
  return app.listen(port, () => {
    console.log(`Started server on the port ${port}`);
  });
};

module.exports = start;