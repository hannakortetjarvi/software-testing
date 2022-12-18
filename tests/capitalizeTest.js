import capitalize from '../src/capitalize.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;    
// const should = chai.should(); 

describe('capitalize.js', () => {
    const testString = "my test STRING";
    const expectedResult = "My test string";
    const result = capitalize(testString);
    
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

    it('Assert return type is string no matter the input', () => {
        expect(result).to.be.string;
    
        expect(capitalize("")).to.be.string; // empty string
        expect(capitalize(Symbol("test"))).to.be.string; // symbol
        expect(capitalize(testString.charAt(0))).to.be.string; // character
        expect(capitalize({testi: 1, "key": "value"})).to.be.string; // object

        expect(capitalize(1)).to.be.string; // int 
        expect(capitalize(1.2)).to.be.string; // float
        expect(capitalize(-1.2)).to.be.string; // negative
        expect(capitalize(BigInt(100000000000000000000000))).to.be.string; // BigInt
    
        expect(capitalize("😊")).to.be.string; // unicode
        expect(capitalize(Array.of())).to.be.string; // empty array
        expect(capitalize(Array.of("😊", "😊"))).to.be.string; // array of unicode
        expect(capitalize(Array.of('My', 2, '😊', new Object()))).to.be.string; // array of any
        
        expect(capitalize(true)).to.be.string; // boolean
        expect(capitalize(false)).to.be.string; // boolean
        expect(capitalize(null)).to.be.string;
        expect(capitalize(undefined)).to.be.string;
    });

});