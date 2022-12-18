import compact from '../../src/compact.js'
import words from '../../src/words.js'
import filter from '../../src/filter.js'
import chai from 'chai';
import Mocha from 'mocha';

const describe = Mocha.describe;
const it = Mocha.it;
const expect = chai.expect;
// const should = chai.should();

const search = {
    categories: [],
    string: "",
}

const products = []

class Product {
    constructor(name, color, price, category, inStock=true) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.category = category;
        this.inStock = inStock;
    }
}
products.push( new Product("strawberry", "red", 100, "berry"));
products.push( new Product("blueberry", "blue", 200, "berry"));
products.push( new Product("orange", "orange", 200, "fruit"));
products.push( new Product("apple", "red", 300, "fruit"));
products.push( new Product("cloudberry", "orange", 50, "berry"));
products.push( new Product("sunflower", "yellow", 1000, "flower", false));
products.push( new Product("eggplant", "blue", 9001, "vegetable"));


describe("Search Products", () => {
    it('User adds categories to search from', () => {
        search.categories.push("fruit");
        search.categories.push(null);
        search.categories.push("berry");
        search.categories.push(0);

        expect(search.categories)
            .to.eql(['fruit', null, 'berry', 0]);
    });

    it('User writes the search term and executes query', () => {
        search.string = "blue & red strawberry";
    });

    it('Server validates the inputs', () => {
        const searchWords = words(search.searchString);
        expect( searchWords ).to.eql(   ['blue', 'red', 'strawberry'] );

        const searchCategories = compact(search.categories);
        expect( searchCategories    ).to.eql(   ['fruit', 'berry']  )
    });


    it('Server filters the products by category', () => {
        const searchCategories = compact(search.categories);
        
        const correctCategories = filter(products, ({category}) => {
            return ['fruit', 'berry'].includes(category)
        });
        
        const compactCategories = filter(products, ({category}) => {
            return searchCategories.includes(category)
        });
        
        expect(compactCategories).to.eql(correctCategories)
        
    })

    it('Filter by keywords', () => {

        const searchWords = words(search.string);
        const correctSearchWords = ['blue', 'red', 'strawberry'];
        
        const searchResults = filter(products, ({name, color}) => {
            return searchWords.includes(name) || searchWords.includes(color)
        });

        const correctSearchResults = filter(products, ({name, color}) => {
            return correctSearchWords.includes(name) || correctSearchWords.includes(color)
        });
        
        expect(searchResults).lengthOf(4);
        expect(searchResults).to.eql(correctSearchResults);
    })
        
});