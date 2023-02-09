const path = require('path');
const fs = require('fs');
const solc = require('solc');

//const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
const contractPath = path.resolve(__dirname, 'ConsentLetter.sol');
const source = fs.readFileSync(contractPath, 'utf8');


const input = {
    language: 'Solidity',
    sources: {
        'ConsentLetter.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

const tempfile = JSON.parse(solc.compile(JSON.stringify(input)));
const contractFile = tempfile.contracts['ConsentLetter.sol']['ConsentLetter'];
module.exports = contractFile;