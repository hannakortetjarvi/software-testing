import compact from '../src/compact.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;    
// const assert = chai.assert;    
// const should = chai.should(); 

describe('compact.js', () => {
    const testInput = Array.of(0, 1, false, 2, '', 3);
    const expectedResult = Array.of(1, 2, 3);
    const result = compact(testInput);

    it('Should return an array', () => {
        expect(result).to.be.an('array');
        expect(compact([])).to.be.an('array');
        expect(compact([false, false])).to.be.an('array');
    });
    
    it('Should return an array with all falsey values removed', () => {
        expect(result).to.eql(expectedResult);
        expect(compact(expectedResult)).to.eql(expectedResult);
        expect(compact([false, false])).to.eql([]);
    });

    it('Should fail if input is not array', () => {
        expect(() => compact(testInput)).to.throw();

        // String is array-like, but not array 
        expect(() => compact("asd")).to.throw();
        expect(() => compact(3)).to.Throw();
        expect(() => compact(new Object())).to.Throw();
    });

});