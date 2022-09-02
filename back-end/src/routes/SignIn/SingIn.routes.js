const express = require('express');
const Controller = require('../../controllers/SignIn.controller');
const router = express.Router();

router.post('/', Controller.signIn);

module.exports = router;
