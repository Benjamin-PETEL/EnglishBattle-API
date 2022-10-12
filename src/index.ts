import { app } from './server';
import dotenv from 'dotenv';
import { initVerbs } from './verbs/verbService'

dotenv.config();
const PORT = process.env.PORT || 3000;

initVerbs();

app.listen(PORT, () => {
    console.log('express running on port ' + PORT);
});
