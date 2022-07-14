const express = require('express');

const app = express();
const API = '/api';

// Avoid CORS error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        // Just ignore theses requests, gain some cpu time
        return res.status(200).send();
    } else {
        return next();
    }
});

app.use(API + '/verbs', require('./verbs/verbRouter'));
app.use(API + '/simple', require('./simple/simpleRouter'));

module.exports = app;