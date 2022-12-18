import reduce from '../../src/reduce.js';
import filter from '../../src/filter.js';
import {red_apple, green_banana, pink_watermelon, shoppingCart, sumPrices} from './testVariables.js';
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

describe('remove product from shopping cart', function() {
    it('shopping cart should update its products and price when item is removed and cart becomes empty', function() {
        let cart = new shoppingCart('1234567890', red_apple.price, [red_apple]);
        const willBeRemoved = red_apple;
        const func = product => {
            product.id != willBeRemoved.id
        };
        cart.products = filter(cart.products, func);
        cart.price = reduce(cart.products, sumPrices, 0);
        expect(cart.price).to.equal(0.00);
        expect(cart.products).to.eql([]);
    });

    it('shopping cart should update its products and price when item is removed and cart still has products', function() {
        let cart = new shoppingCart('1234567890', red_apple.price + green_banana.price + pink_watermelon.price, [red_apple, green_banana, pink_watermelon]);
        const willBeRemoved = red_apple;
        const func = product => {
            if (product.id != willBeRemoved.id) return true;
        };
        cart.products = filter(cart.products, func);
        cart.price = reduce(cart.products, sumPrices);
        expect(cart.price).to.equal(9.55);
        expect(cart.products.length).to.equal(2);
    });
});