import reduce from '../../src/reduce.js';
import filter from '../../src/filter.js';
import {red_apple, green_banana, blue_grape, shoppingCart, sumPrices} from './testVariables.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('add product to shopping cart', function() {
    it('shopping cart should update its price when multiple items are added', function() {
        let cart = new shoppingCart('1234567890');
        cart.products.push(red_apple);
        cart.products.push(green_banana);
        cart.price = reduce(cart.products, sumPrices);
        expect(cart.price).to.equal(6.44);
    });

    it('shopping cart should update its price when one item is added', function() {
        let cart = new shoppingCart('1234567890');
        cart.products.push(red_apple);
        cart.price = reduce(cart.products, sumPrices, 0);
        expect(cart.price).to.equal(3.99);
    });

    it('product should be in stock before adding to shopping cart', function() {
        let cart = new shoppingCart('1234567890');
        const wantToBeAdded = [red_apple, blue_grape];
        const toBeAdded = filter(wantToBeAdded, ({ inStock }) => inStock);
        cart.products.push(toBeAdded);
        expect(cart.products.length).to.equal(1);
    });
});