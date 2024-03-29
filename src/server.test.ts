import request from 'supertest';
import { app } from './server';

describe('Main routing', () => {
    it('/verbs - get', (done) => {
        request(app)
            .get('/api/verbs')
            .expect(200)
            .end((err) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});