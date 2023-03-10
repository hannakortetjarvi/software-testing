import defaultToAny from '../src/defaultToAny.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('defaultToAny.js', function() {
    it('should return original integer value', function() {
        const result = defaultToAny(1, 10, 20);
        expect(result).to.equal(1);
    });

    it('should return first default', function() {
        const result = defaultToAny(undefined, 10, 20);
        expect(result).to.equal(10);
    });

    it('should return second default', function() {
        const result = defaultToAny(undefined, null, 20);
        expect(result).to.equal(20);
    });

    it('should return original string value', function() {
        const result = defaultToAny("hei", "hoi", 1);
        expect(result).to.equal("hei");
    });
});