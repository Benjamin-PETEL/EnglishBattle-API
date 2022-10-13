import express, { Request, Response, Router } from 'express';
import * as VerbService from './verbService';

export const verbRouter: Router = express.Router();

verbRouter.get('/', (req: Request, res: Response) => {
    const verbs = VerbService.getVerbs();
    res.json(verbs);
});