const request = require('supertest');
const express = require('express');
const router = require('./verbRouter');
const verbService = require('./verbService');

describe('verbs endpoints', () => {
    const app = express();

    beforeAll(() => {
        app.use('/', router);
    });

    test('get', (done) => {
        // mock verbService
        verbService.getVerbs = jest.fn(() => {
            return [{ bv: 'go', sp: 'went', pp: 'gone' }];
        });
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