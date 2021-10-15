'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./router');

const start = (port) => {
  const app = express();
  app.use(cors());
  app.use(router);
  return app.listen(port, () => {
    console.log(`SERVER RUNNING ON http://localhost:${port}`);
  });
};

module.exports = start;