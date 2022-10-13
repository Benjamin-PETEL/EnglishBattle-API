import { PORT } from './index';

describe.only('index', () => {
    
    it('dotenv', () => {
        expect(PORT).toBe(3000);
    });
});