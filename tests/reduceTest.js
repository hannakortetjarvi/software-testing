import reduce from '../src/reduce.js';
import chai from 'chai';
const expect = chai.expect;

describe('reduce.js', function() {
    it('should return sum', function() {
        const result = reduce([1, 2], (sum, n) => sum + n, 0)
        expect(result).to.equal(3);
    });

    it('should put same values together', function() {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                                (result[value] || (result[value] = [])).push(key)
                                return result
                            }, {});
        expect(result).to.eql({ '1': ['a', 'c'], '2': ['b'] });
    });

    it('should return maximum', function() {
        const array = [1,2,3,4,5,6,7,6,5,4,3];
        const maximum = (a, b) => Math.max(a, b);
        const result = reduce(array, maximum);
        expect(result).to.equal(7);
    });

    it('should return minimum', function() {
        const array = [1,2,3,4,5,6,7,6,0,4,3];
        const minimum = (a, b) => Math.min(a, b);
        const result = reduce(array, minimum);
        expect(result).to.equal(0);
    });

    it('should return longest string', function() {
        const array = ["a", "aa", "aaa", "bb", "abcd", "o"];
        const longest = (a, b) => {const len1 = a.length; const len2 = b.length; if (len1 > len2) return a; else return b;};
        const result = reduce(array, longest);
        expect(result).to.equal("abcd");
    });

    it('should return longest string', function() {
        const array = ["a", "aa", "aaa", "bb", "abcd", "o"];
        const longest = (a, b) => {const len1 = a.length; const len2 = b.length; if (len1 > len2) return a; else return b;};
        const result = reduce(array, longest);
        expect(result).to.equal("abcd");
    });

    it('should put same values together', function() {
        const result = reduce(new Object({ 'a': 1, 'b': 2, 'c': 1 }), (result, value, key) => {
                                (result[value] || (result[value] = [])).push(key)
                                return result
                            }, {});
        expect(result).to.eql({ '1': ['a', 'c'], '2': ['b'] });
    });
});