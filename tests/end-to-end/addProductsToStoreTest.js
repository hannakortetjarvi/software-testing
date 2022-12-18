import capitalize from '../../src/capitalize.js';
import clamp from '../../src/clamp.js';
import ceil from '../../src/ceil.js';
import defaultToAny from '../../src/defaultToAny.js';
import filter from '../../src/filter.js'

import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;

const products = []

function addNewProduct(name, color, price, category, description=null) { 
    let n = capitalize(name);
    let col = capitalize(color);
    let p = clamp(ceil(price, 2), 0, Number.MAX_SAFE_INTEGER);
    let cat = category;

    const product = new Product(n, col, p, cat)
    product.setDescription(defaultToAny(description, capitalize(`${color} ${name}`)));

    let productsWithSameName = filter(products, ({name}) => name == product.name);
    
    if (productsWithSameName[0].length == 0) {
        products.push(product);
        return product;
    }

    return null
}

class Product {
    constructor(name, color, price, category, inStock=true) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.category = category;
        this.inStock = inStock;

        this.description;
    }

    setDescription(description) {
        this.description = description
    }
}
addNewProduct("strawberry", "red", 100, "berry", "Big and Juicy strawberries!");
addNewProduct("blueberry", "blue", 200, "berry");
addNewProduct("orange", "orange", 200, "fruit");
addNewProduct("apple", "red", 300, "fruit");
addNewProduct("cloudberry", "orange", 50, "berry");
addNewProduct("sunflower", "yellow", 1000, "flower");
addNewProduct("eggplant", "blue", 9001, "vegetable", "Eggy plant");


describe("Producer adds products to the store", () => {
    it('Should be able to add a new product', () => {
        let newProduct = addNewProduct("banana", "yellow", 5, "berry", "Bendy bois");
        expect(newProduct).not.to.be.null;
    });
    
    it('Should not be able to add a product with the same name', () => {
        let newProduct = addNewProduct("banana", "yellow", 10, "berry");
        expect(newProduct).to.be.null;
    });
    
    it('Price should be presented with 2 decimals', () => {
        let newProduct = addNewProduct("coffee", "brown", 9.9776, "drink");
        expect(newProduct.price).to.equal('9.98')

        let newProduct2 = addNewProduct("kaffe", "ruskee", 9.9999, "eliksiiri");
        expect(newProduct2.price).to.eql('10.00')
    });
    
    it('if not given, description should default to color + name', () => {
        let newProduct = addNewProduct("water", "clear", 42, "drink", "nässyltä");
        expect(newProduct.description).to.eql('nässyltä')
        
        let newProduct2 = addNewProduct("kyrsä", "musta", 42, "treat");
        expect(newProduct2.description).to.eql('Musta kyrsä');
    });

});