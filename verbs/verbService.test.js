const verbService = require('./verbService');

describe('getVerbs', () => {
    test('nominalCase', () => {
        verbService.initVerbs();
        const verbs = verbService.getVerbs();
<<<<<<< HEAD
        const expected = [{ bv: 'go', sp: 'went', pp: 'gone' }];
=======
        const expected = [{ baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone' }];
>>>>>>> fcb3ca3 (Feature: add verbs - get)
        expect(verbs).toBeDefined();
        expect(Array.isArray(verbs)).toBe(true);
        expect(verbs).toEqual(expect.arrayContaining(expected));
    });
});