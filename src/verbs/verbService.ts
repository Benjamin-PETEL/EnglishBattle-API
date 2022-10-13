import fs from 'fs';
import { Verb } from '../model/verb.model';

// Variable containing all the verbs
let _verbs: Verb[];

const getVerbs = (): Verb[] => {
    return _verbs;
};

const initVerbs = (): void => {
    try {
        const data = fs.readFileSync('./resources/english_verbs.csv');
        _verbs = _CSVToArray(data.toString(), ',', true);
    } catch (error) {
        console.error(error);
    }
};

const _CSVToArray = (data: string, delimiter = ',', omitFirstRow = false): Verb[] => {
    return data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(str => {
            const verbArray = str.split(delimiter);
            return {
                baseVerbal: verbArray[0],
                simplePast: verbArray[3],
                pastParticipe: verbArray[4],
                isRegular: (verbArray[5] === 'true')
            };
        });
};

export { initVerbs, getVerbs };