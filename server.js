const express = require('express');

const app = express();
const API = '/api';

app.use(API + '/verbs', require('./verbs/verbRouter'));

module.exports = app;