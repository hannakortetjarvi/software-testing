import isDate from '../src/isDate.js';
import chai from 'chai';

const describe = chai.describe;
const it = chai.it;
const expect = chai.expect;

describe('isDate.js', function() {
    it('should return true', function() {
        const result = isDate(new Date);
        expect(result).to.equal(true);
    });

    it('should return false', function() {
        const result = isDate('Mon April 23 2012');
        expect(result).to.equal(false);
    });

    it('should return false', function() {
        const result = isDate(new Object({'test': 'value'}));
        expect(result).to.equal(false);
    });

    it('should return true', function() {
        const date = new Date();
        const result = isDate(new Object(date));
        expect(result).to.equal(true);
    });

    it('should return true', function() {
        const date = new Date(Date.now());
        const result = isDate(new Object(date));
        expect(result).to.equal(true);
    });
});