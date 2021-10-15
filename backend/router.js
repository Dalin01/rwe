'use strick';

const router = require('express').Router();

const controller = require('./controller');

router.get('/site', controller.getAll);

module.exports = router;