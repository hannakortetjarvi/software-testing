import filter from '../src/filter.js';
import chai from 'chai';
const expect = chai.expect;

describe('filter.js', function() {
    it('should return active members', function() {
        const user1 = { 'user': 'barney', 'active': true };
        const user2 = { 'user': 'fred',   'active': false };
        const users = [user1, user2];
        const result = filter(users, ({active}) => active);
        expect(result).to.eql([user1]);
    });

    it('should return empty list', function() {
        const test1 = [];
        const result1 = filter(test1, ({val}) => val);
        expect(result1).to.eql([]);

        const test2 = "test";
        const result2 = filter(test2, ({val}) => val);
        expect(result2).to.equal([]);
    });
});