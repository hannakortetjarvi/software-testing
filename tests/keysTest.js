import keys from '../src/keys.js';
import chai from 'chai';

const assert = chai.assert;    
const expect = chai.expect;    
const should = chai.should(); 

describe('keys.js', () => {
    class Foo {
        constructor() {
            this.a = 1;
            this.b = 2;
        }
    }
    Foo.prototype.c = 3

    const result = keys(new Foo);
    const expectedResult = ['a', 'b'];

    it('Should return an array', () => {
        expect( result      ).to.be.an('array');
        expect( keys('hi')  ).to.be.an('array');
        expect( keys(1)     ).to.be.an('array');
    });
    
    it('Should return enumerable property names of object', () => {
        let obj = { test: 2, "key": "value" }
        expect( result      ).to.have.members(expectedResult);
        expect( keys(obj)   ).to.have.members(['test', 'key']);
    });
    
    it('Should convert input to object and return enumerable property names"', () => {
        expect( keys(123)   ).to.be.eql([]);
    });

});