const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const simple = ['tata', 'toto', 'titi'];
    res.json(simple);
});

module.exports = router;