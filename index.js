require('dotenv').config();

const app = require('./server.js');
const port = process.env.PORT;

app.listen(port, () => {
    console.log('express running on port ' + port);
});