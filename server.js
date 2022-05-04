const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ hello: 'Hello World!' });
});

module.exports = app;