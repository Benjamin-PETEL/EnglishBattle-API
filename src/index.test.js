require('dotenv').config();

test('dotenv', () => {
    const port = process.env.PORT;
    expect(port).toBe('3000');
});