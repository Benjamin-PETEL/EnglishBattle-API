import * as verbService from'./verbService';

describe('VerbService', () => {
    test('Integration: initVerbs + _CSVToArray', () => {
        verbService.initVerbs();
        const verbs = verbService.getVerbs();
        const expected = { baseVerbal: 'go', simplePast: 'went', pastParticipe: 'gone', isRegular: false };
        const found = verbs.find(el => el.baseVerbal === 'go');

        expect(verbs).toBeDefined();
        expect(Array.isArray(verbs)).toBe(true);
        expect(verbs.length).toBeGreaterThan(900);
        expect(found).toBeDefined();
        expect(found.baseVerbal).toBe(expected.baseVerbal);
        expect(found.simplePast).toBe(expected.simplePast);
        expect(found.pastParticipe).toBe(expected.pastParticipe);
        expect(found.isRegular).toBe(expected.isRegular);
    });
});