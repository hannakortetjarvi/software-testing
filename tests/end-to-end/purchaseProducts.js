import isDate from '../../src/isDate.js';
import ceil from '../../src/ceil.js';
import {red_apple, green_banana, shoppingCart, voucherOld, voucherOK, checkOut} from './testVariables.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('purchase products in the shopping cart', function() {
    it('user uses an OK vouncher', function() {
        let cart = new shoppingCart('1234567890', red_apple.price + green_banana.price, [red_apple, green_banana]);
        const currentDate = Date.now();

        const usedVoucher = voucherOK;
        expect(isDate(usedVoucher.expirationDate)).to.equal(true);

        let checkout = new checkOut('22222', cart.price);

        if (usedVoucher.expirationDate > currentDate) {
            const discount = cart.price * (usedVoucher.percent / 100); //2.1252
            const updatePrice = ceil(discount, 2);
            expect(updatePrice).to.equal(2.13);
            const newPrice = cart.price - updatePrice; //4.31
            checkout.finalPrice = Math.floor(newPrice * 100) / 100;
        }

        expect(checkout.finalPrice).to.equal(4.31);
    });

    it('user uses an old vouncher', function() {
        let cart = new shoppingCart('1234567890', red_apple.price + green_banana.price, [red_apple, green_banana]);
        const currentDate = Date.now();

        const usedVoucher = voucherOld;
        expect(isDate(usedVoucher.expirationDate)).to.equal(true);

        let checkout = new checkOut('22222', cart.price);

        if (usedVoucher.expirationDate > currentDate) {
            const discount = cart.price * (usedVoucher.percent / 100);
            const updatePrice = ceil(discount, 2);
            expect(updatePrice).to.equal(2.13);
            checkout.finalPrice = cart.price - updatePrice;
        }

        expect(checkout.finalPrice).to.equal(cart.price);
    });
});