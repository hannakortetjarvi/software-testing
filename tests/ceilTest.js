import ceil from '../src/ceil.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('ceil.js', function() {
    it('should return next integer number using precision zero', function() {
        const testVal = 5.01;
        const result = ceil(testVal);
        expect(result).to.equal(6);
    });

    it('should return next double with two decimals', function() {
        const testVal = 3.002;
        const result = ceil(testVal, 2);
        expect(result).to.equal(3.01);
    });

    it('should return next integer number using negative precision', function() {
        const testVal = 12345;
        const result = ceil(testVal, -3);
        expect(result).to.equal(13000);
    });

    it('should return next integer number for a negative number', function() {
        const testVal = -12.3;
        const result = ceil(testVal);
        expect(result).to.equal(-12);
    });

    it('should return next integer number for a negative number using negative precision', function() {
        const testVal = -19573930;
        const result = ceil(testVal, -5);
        expect(result).to.equal(-19500000);
    });

    it('should return NaN when used with non-number values', function() {
        const testVal = "test with string";
        const result = ceil(testVal);
        expect(result).to.be.NaN;
    });

    it('should return next double when used with a string that has a pure number in it', function() {
        const testVal = "2.023";
        const result = ceil(testVal, 2);
        expect(result).to.equal(2.03);
    });
});