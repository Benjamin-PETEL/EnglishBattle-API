const request = require('supertest');
const app = require('./server');

describe('Main routing', () => {
    test('/verbs - get', (done) => {
        request(app)
            .get('/api/verbs')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});