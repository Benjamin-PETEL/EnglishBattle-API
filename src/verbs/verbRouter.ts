import express, { Request, Response, Router } from 'express';
import * as VerbService from './verbService';

export const verbeRouter: Router = express.Router()

verbeRouter.get('/', (req: Request, res: Response) => {
    const verbs = VerbService.getVerbs();
    res.json(verbs);
});