import words from '../src/words.js';
import chai from 'chai';

const assert = chai.assert;    
const expect = chai.expect;    
const should = chai.should(); 

describe('words.js', () => {
    const testInput = "fred, barney, & pebbles";
    const pattern = '/[^, ]+/g';
    const expectedResult = ['fred', 'barney', 'pebbles']
    const expectedResult2 = ['fred', 'barney', '&', 'pebbles']
    const result = words(testInput);
    const result2 = words(testInput, pattern)

    it('Should return an array', () => {
        expect( result  ).to.be.an('array');
        expect( result2 ).to.be.an('array');
        
        expect( words("")       ).to.be.an('array');
        expect( words("😊 😊")  ).to.be.an('array');
        expect( words("1 2 3")  ).to.be.an('array');
    });
    
    it('Should return an array with only the words extracted, when no pattern argument', () => {
        expect( result  ).to.eql(expectedResult);
    });

    it('Should return an array according to String pattern argument', () => {
        expect( result2 ).to.eql(expectedResult2)
    });

    it('Should return an array according to RegExp pattern argument', () => {
        const regex = words(testInput, new RegExp(pattern));
        expect( regex ).to.eql(expectedResult2);
    });
    
    it('Should fail if input is not array', () => {
        expect( () => words([]) ).to.throw();
    });

});