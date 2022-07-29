require('dotenv').config();

const { initVerbs } = require('./verbs/verbService');
initVerbs();

const app = require('./server.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('express running on port ' + port);
});