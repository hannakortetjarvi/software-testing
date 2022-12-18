export class shoppingCart {
    constructor(id, price=0.00, products=[]) {
        this.id = id,
        this.price = price,
        this.products = products
    }
}

export class checkOut {
    constructor(id, finalPrice=0.00) {
        this.id = id,
        this.finalPrice = finalPrice
    }
}

export const red_apple = {id: '123', name: 'Gaia apple', foodType: 'fruit', producer: 'Old McDonald', price: 3.99, inStock: true};
export const green_banana = {id: '111', name: 'Green banana', foodType: 'fruit', producer: 'Young McDonald', price: 2.45, inStock: true};
export const pink_watermelon = {id: '199', name: 'Pink watermelon', foodType: 'fruit', producer: 'Teen McDonald', price: 7.10, inStock: true};
export const blue_grape = {id: '001', name: 'Blue grape', foodType: 'fruit', producer: 'Young McDonald', price: 1.98, inStock: false};


const dateOld = new Date("1999-12-12T00:00:00");
const dateOK = new Date("2025-01-01T00:00:00");
export const voucherOld = {id: '98', used: false, percent: 25, expirationDate: dateOld};
export const voucherOK = {id: '99', used: false, percent: 33, expirationDate: dateOK};

export const sumPrices = (a, b) => {
    if (a.price == undefined && b.price == undefined) return 0.00;
    if (a.price == undefined && b.price != undefined) return b.price;
    if (b.price == undefined && a.price != undefined) return a.price;
    return a.price + b.price;
};