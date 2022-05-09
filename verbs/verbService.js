const fs = require('fs');

// Variable containing all the verbs
let _verbs;

const getVerbs = () => {
    return _verbs;
};

const initVerbs = () => {
    try {
        const data = fs.readFileSync('./resources/english_verbs.csv');
        _verbs = _CSVToArray(data.toString(), ',', true);
    } catch (error) {
        console.error(error);
    }
};

const _CSVToArray = (data, delimiter = ',', omitFirstRow = false) => {
    return data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(str => {
            const verbArray = str.split(delimiter);
            return { bv: verbArray[0], sp: verbArray[3], pp: verbArray[4] };
        });
};

module.exports = { getVerbs, initVerbs };