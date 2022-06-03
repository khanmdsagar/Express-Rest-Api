const express = require('express');
const router  = express.Router();

let RegistrationController = require('../controllers/RegistrationController');

router.get('/registration', RegistrationController.register);

module.exports = router;