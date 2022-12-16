import ceil from '../src/ceil.js';
import chai from 'chai';
const expect = chai.expect;

describe('precision zero', function() {
    it('should return next integer number', function() {
        const testVal = 5.01;
        const result = ceil(testVal);
        expect(result).to.equal(6);
    });

    it('should return next double', function() {
        const testVal = 3.002;
        const result = ceil(testVal, 2);
        expect(result).to.equal(3.01);
    });
});