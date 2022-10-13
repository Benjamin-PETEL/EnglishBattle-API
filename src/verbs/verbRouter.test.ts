import request from 'supertest';
import express from 'express';
import { mocked } from 'jest-mock';
import { verbRouter } from './verbRouter';
import { getVerbs } from './verbService';

jest.mock('./verbService', () => {
    return {
        getVerbs: jest.fn().mockImplementation(() => [{ bv: 'go', sp: 'went', pp: 'gone' }])
    };
});

describe('verbRouter', () => {
    const app = express();

    beforeAll(() => {
        app.use('/', verbRouter);
    });

    test('#get', (done) => {
        mocked(getVerbs);
        const expected = [{ bv: 'go', sp: 'went', pp: 'gone' }];
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