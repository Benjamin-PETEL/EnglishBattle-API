import { PORT } from './index';

describe('index', () => {
    
    it('dotenv', () => {
        expect(PORT).toBe(3000);
    });
});