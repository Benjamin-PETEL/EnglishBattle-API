import request from 'supertest';
import express from 'express';
import { mocked } from 'jest-mock';
import { verbRouter } from './verbRouter';
import { getVerbs } from './verbService';
import { Verb } from '../model/verb.model';

jest.mock('./verbService', () => {
    return {
        getVerbs: jest.fn().mockImplementation(() => [{ baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone', isRegular: true }])
    };
});

describe('verbRouter', () => {
    const app = express();

    beforeAll(() => {
        app.use('/', verbRouter);
    });

    it('#get', (done) => {
        mocked(getVerbs);
        const expected: Verb[] = [{ baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone', isRegular: true }];
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body).toBeDefined();
                expect(res.body.length).toBe(1);
                expect(res.body).toEqual(expect.arrayContaining(expected));
                done();
            });
    });
});