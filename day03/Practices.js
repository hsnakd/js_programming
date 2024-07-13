
/*
Create a custom class for Product with the following requirements:
    Attributes: 
        name, price, quantity, description, prdocutId
    
    actions:
        constructor: to initialize all attributes
        displayProductInfo: to display the product information (name, price, quantity, description)  
*/

/**
 * Represents a product with attributes such as name, price, quantity, description, and productId.
 * 
 * @class Product
 * @constructor
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {string} description - The description of the product.
 * @param {string} productId - The unique identifier of the product.
 */
class Product {
    
    constructor(name, price, quantity, description, productId) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productId = productId;
    }

    /**
     * Displays the product information (name, price, quantity, description, productId) in the console.
     * 
     * @method displayProductInfo
     * @memberof Product
     * @returns {void}
     */
    displayProductInfo() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.productId}`);
    }
}

// test product object
let product1 = new Product('Laptop', 1500, 5, 'High-end laptop with i7 processor', 'P001');
product1.displayProductInfo();



console.log('----------------------------------------------------');

/*
Create a parent class for Animal with the following requiremnts:
    Attributes:
             name, age, gender, breed

    Actions:
        Constructor: to set all the attributes
        eat: displays the name + "is eating"
        sleep: displays the name + "is sleeping"
*/

class Animal{

    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

/*
Create the following child classes of Animal with the following requirments:
    Dog class:
        Additional Action:
            bark();

    Cat class:
        Additional Action:
            meow();
    
*/
class Dog extends Animal{

    // add unique instance variable of dog named color
    constructor(name, age, gender, breed, color) {
        super(name, age, gender, breed);
        this.color = color;
    }
    
    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal{

    meow() {
        console.log(`${this.name} is meowing`);
    }
}
