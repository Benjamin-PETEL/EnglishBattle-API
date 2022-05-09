const verbService = require('./verbService');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const verbs = verbService.getVerbs();
    res.json(verbs);
});

module.exports = router;