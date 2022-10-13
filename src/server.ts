import express, {Express, Request, Response, NextFunction} from 'express';
import { verbRouter } from './verbs/verbRouter';

const API = '/api';

export const app: Express = express();
    
// Avoid CORS error
app.use((req: Request, res: Response, next: NextFunction) => {
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

app.use(API + '/verbs', verbRouter);