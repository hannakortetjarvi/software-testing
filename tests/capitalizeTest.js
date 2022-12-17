import capitalize from '../src/capitalize.js';
import chai, { AssertionError } from 'chai';

const assert = chai.assert;    
const expect = chai.expect;    
const should = chai.should(); 

describe('capitalize.js', () => {
    const testString = "my test STRING";
    const expectedResult = "My test string";
    const result = capitalize(testString);

    it('Assert return type', () => {
        expect(result).to.be.string;
        expect(capitalize(1)).to.be.string;
    });

    it('Should convert the first character of the string to upper case', () => {
        expect(result.charAt(0)).to.equal(expectedResult.charAt(0));
    });

    it('Should convert other characters to lowercase', () => {
        expect(result).to.equal(expectedResult);
    });

    it('Shoud not effect correctly formatted strings', () => {
        const correct = "Correct";
        expect(capitalize(correct)).to.equal(correct);
    });

});