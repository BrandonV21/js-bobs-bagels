class Basket {
    constructor() {
        this.basket = []
    }
    myBasket() {
        return this.basket
    }
    addBagel() {
        this.basket.unshift('tuna bagel')   //basket is an array, unshift(adds a bagel string to the array), this. is a keyword is needed for the constructor
        return this.basket
    }
    removeBagel() {
        this.basket.shift('tuna bagel')
        return this.basket
    }
    changeBagel() {
        this.basket.unshift('whole Wheat bagel')   
        return this.basket
    }
}

module.exports = Basket