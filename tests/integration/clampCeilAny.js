import clamp from '../../src/clamp.js';
import ceil from '../../src/ceil.js';
import defaultToAny from '../../src/defaultToAny.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;    
// const should = chai.should(); 

describe('clamp.js & ceil.js', function() {
    it('should return upper bound', function() {
        const testVal = 5.01;
        const resultCeil = ceil(testVal);
        const lower = -5;
        const upper = 5;
        const resultClamp = clamp(resultCeil, lower, upper);
        expect(resultClamp).to.equal(5);
    });

    it('should return number inside bounds', function() {
        const testVal = -5.01;
        const resultCeil = ceil(testVal);
        const lower = -5;
        const upper = 5;
        const resultClamp = clamp(resultCeil, lower, upper);
        expect(resultClamp).to.equal(-4);
    });

    it('should return lower bound with precision one', function() {
        const resultClamp = clamp(2.66, 6.22, 9);
        const resultCeil = ceil(resultClamp, 1)
        expect(resultCeil).to.equal(6.3);
    });

    it('should return upper bound with precision one', function() {
        const resultClamp = clamp(10, 6.22, 9.99);
        const resultCeil = ceil(resultClamp, 1)
        expect(resultCeil).to.equal(10.0);
    });

    it('should return original with precision one', function() {
        const resultClamp = clamp(6.656, 6.22, 9.99);
        const resultCeil = ceil(resultClamp, 2);
        expect(resultCeil).to.equal(6.66);
    });

    it('should return first default value with precision one', function() {
        const resultDefault = defaultToAny(undefined, 10.24, 60.123);
        const resultCeil = ceil(resultDefault, 1);
        expect(resultCeil).to.equal(10.3);
    });

    it('should return second default value with precision minus three', function() {
        const resultDefault = defaultToAny(undefined, null, 1234567);
        const resultCeil = ceil(resultDefault, -3);
        expect(resultCeil).to.equal(1235000);
    });
});