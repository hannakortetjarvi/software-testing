import isDate from '../src/isDate.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('isDate.js', function() {
    it('should return true when used with date', function() {
        const result = isDate(new Date);
        expect(result).to.equal(true);
    });

    it('should return false when used with string trying to be a date', function() {
        const result = isDate('Mon April 23 2012');
        expect(result).to.equal(false);
    });

    it('should return false when used with an object', function() {
        const result = isDate(new Object({'test': 'value'}));
        expect(result).to.equal(false);
    });

    it('should return true when used with a date inside an object', function() {
        const date = new Date();
        const result = isDate(new Object(date));
        expect(result).to.equal(true);
    });

    it('should return true when used with a current date', function() {
        const date = new Date(Date.now());
        const result = isDate(new Object(date));
        expect(result).to.equal(true);
    });
});