const verbService = require('./verbService');

describe('getVerbs', () => {
    test('nominalCase', () => {
        verbService.initVerbs();
        const verbs = verbService.getVerbs();
        const expected = [{ bv: 'go', sp: 'went', pp: 'gone' }];
        expect(verbs).toBeDefined();
        expect(Array.isArray(verbs)).toBe(true);
        expect(verbs).toEqual(expect.arrayContaining(expected));
    });
});