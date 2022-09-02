const express = require('express');
const Controller = require('../../controllers/User.controller');

const router = express.Router();

router.post('/', Controller.createUser);

module.exports = router;
