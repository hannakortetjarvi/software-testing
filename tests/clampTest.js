import clamp from '../src/clamp.js';
import chai from 'chai';
const expect = chai.expect;

describe('clamp.js', function() {
    it('should return upper bound', function() {
        const number = 20;
        const lower = -5;
        const upper = 5;
        const result = clamp(number, lower, upper);
        expect(result).to.equal(upper);
    });

    it('should return lower bound', function() {
        const number = -20;
        const lower = -5;
        const upper = 5;
        const result = clamp(number, lower, upper);
        expect(result).to.equal(lower);
    });

    it('should return original number since it is between bounds', function() {
        const number = 2;
        const lower = -5;
        const upper = 5;
        const result = clamp(number, lower, upper);
        expect(result).to.equal(2);
    });

    it('should return original number since it is the same as the bounds', function() {
        const number = 1;
        const lower = 1;
        const upper = 1;
        const result = clamp(number, lower, upper);
        expect(result).to.equal(1);
    });

    it('should return original number since it is the same as the bounds', function() {
        const number = 0;
        const lower = 5;
        const upper = -5;
        const result = clamp(number, lower, upper);
        expect(result).to.equal(0);
    });

    it('should fail since lower bound is larger than upper bound', function() {
        const number = -10;
        const lower = 5;
        const upper = -5;
        const result = clamp(number, lower, upper);
        expect(result).to.not.equal(lower);
    });

    it('should be NaN since values are non-numbers', function() {
        const number = "hello";
        const lower = "hola";
        const upper = "hei";
        const result = clamp(number, lower, upper);
        expect(result).to.be.NaN;
    });
});