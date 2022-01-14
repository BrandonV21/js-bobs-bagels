const Basket = require('../src/basket.js');   //This line represents a class 'Basket', which links to the source file.  


describe("basket", () => {    //    Describes the function, Jasmine runs tests from using describe to what's below, it starts from there.
    let basket  

    beforeEach(() => {
        basket = new Basket();   // Creates a new basket, everytime Jasmine runs the test. 
    })

    //Getting a new basket - test 1 
    it("get new basket", () => {
        // set-up 
        const expected = []  // created an array, which is assigned to a variable called expected.
        // execute 
        let result = basket.myBasket()  // created a method in new basket, which is assigned to a variable called result
        // verify
        expect(result).toEqual(expected);  //text in yellow are jasmine keywords. 
    });

    it("add bagel to basket", () => {
         // set-up 
         const expected = ['tuna bagel']  
         // execute 
         let result = basket.addBagel()  
         // verify
         expect(result).toEqual(expected);  
    });

    it("remove bagel to basket", () => {
        // set-up 
        const expected = []  
        // execute 
        let result = basket.removeBagel('tuna bagel')  
        // verify
        expect(result).toEqual(expected);  
    });

    it("add bagel to basket", () => {
        // set-up 
        const expected = ['whole Wheat bagel']  
        // execute 
        let result = basket.changeBagel()  
        // verify
        expect(result).toEqual(expected);  
    });
});
