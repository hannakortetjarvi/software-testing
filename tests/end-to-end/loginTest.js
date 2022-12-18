import keys from '../../src/keys.js';
import compact from '../../src/compact.js';
import words from '../../src/words.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('login', function() {
    it('user should have correct information', function() {
        const user = {
            'username': 'matti.meikalainen',
            'password': 'meikalaisenmatti123'
        }
        const result = keys(user);
        expect(result).to.eql(['username', 'password']);
    });

    it('user should have given mandatory information', function() {
        const user = {
            'username': 'matti.meikalainen',
            'password': 'meikalaisenmatti123'
        }
        let values = new Array();
        keys(user).forEach(val => {
            values.push(user[val]);
        });
        const result = compact(values).length;
        expect(result).to.equal(2);
    });

    it("user shouldn't have spaces in their username or password", function() {
        const user = {
            username: 'matti meikalainen',
            password: 'meikalaisenmatti123'
        }
        const resultName = words(user.username, /[ ,]+/).length;
        expect(resultName).to.equal(2);
        const resultPass = words(user.password, /[ ,]+/).length;
        expect(resultPass).to.equal(1);
    });
});