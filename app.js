const express = require('express');
const router  = require('./app/routes/routes');
const app     = new express();

app.use('/api', router);

module.exports = app;