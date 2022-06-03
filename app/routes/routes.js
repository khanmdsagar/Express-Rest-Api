const express = require('express');
const router  = express.Router();

let RegistrationController = require('../controllers/RegistrationController');

router.post('/registration', RegistrationController.register);

module.exports = router;