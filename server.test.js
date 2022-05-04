const request = require('supertest');
const server = require('./server');

describe('Test endpoints', () => {
    test('/', (done) => {
        request(server)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body.hello).toBe('Hello World!');
                done();
            });
    });
});