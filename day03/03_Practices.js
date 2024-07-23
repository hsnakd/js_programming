
/*
Create a custom class for Product with the following requirements:
    Attributes: 
        name, price, quantity, description, prdocutId
    
    actions:
        constructor: to initialize all attributes
        displayProductInfo: to display the product information (name, price, quantity, description)  
*/

/** Created by /document-code with Tabnine
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

    /** Created by /document-code with Tabnine
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
console.log('----------------------------------------------------');
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
/** Created by /document-code with Tabnine
 * Represents an animal with attributes such as name, age, gender, and breed.
 * 
 * @class Animal
 * @constructor
 * @param {string} name - The name of the animal.
 * @param {number} age - The age of the animal.
 * @param {string} gender - The gender of the animal.
 * @param {string} breed - The breed of the animal.
 */
class Animal{

    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    /**
     * Displays a message indicating that the animal is eating.
     * 
     * @method eat
     * @memberof Animal
     * @returns {void}
     */
    eat() {
        console.log(`${this.name} is eating`);
    }

    /** Created by /document-code with Tabnine
     * Displays a message indicating that the animal is sleeping.
     * 
     * @method sleep
     * @memberof Animal
     * @returns {void}
     */
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// test animal object
let animal1 = new Animal('Eagle', 121, 'Male', 'Black');
animal1.eat();
animal1.sleep();
console.log(animal1.name);


console.log('----------------------------------------------------');
console.log('----------------------------------------------------');
console.log('----------------------------------------------------');


/*
Create the following child classes of Animal with the following requirments:
    Dog class:
        Additional Action:
            bark();

    Cat class:
        Additional Action:
            meow();
    
*/
/** Created by /document-code with Tabnine
 * Represents a dog that extends the Animal class.
 * 
 * @class Dog
 * @extends Animal
 * @constructor
 * @param {string} name - The name of the dog.
 * @param {number} age - The age of the dog.
 * @param {string} gender - The gender of the dog.
 * @param {string} breed - The breed of the dog.
 * @param {string} color - The color of the dog.
 */
class Dog extends Animal{

    constructor(name, age, gender, breed, color) {
        super(name, age, gender, breed);
        this.color = color;
    }
    
    /** Created by /document-code with Tabnine
     * Displays a message indicating that the dog is barking.
     * 
     * @method bark
     * @memberof Dog
     * @returns {void}
     */
    bark() {
        console.log(`${this.name} is barking`);
    }
}

/** Created by /document-code with Tabnine
 * Represents a cat that extends the Animal class.
 * 
 * @class Cat
 * @extends Animal
 * @constructor
 * @param {string} name - The name of the cat.
 * @param {number} age - The age of the cat.
 * @param {string} gender - The gender of the cat.
 * @param {string} breed - The breed of the cat.
 */
class Cat extends Animal{

    /**
     * Displays a message indicating that the cat is meowing.
     * 
     * @method meow
     * @memberof Cat
     * @returns {void}
     */
    meow() {
        console.log(`${this.name} is meowing`);
    }
}

// test dog object
let dog1 = new Dog('Max',5,'Male', 'Bulldog', 'White');
console.log(dog1);
dog1.eat();
dog1.sleep();
dog1.bark();
console.log(dog1.name);

console.log('----------------------------------------------------');

// test cat object
let cat1 = new Cat('Poppy', 3, 'Female', 'Scottish');
console.log(cat1);
cat1.eat();
cat1.sleep();
cat1.meow();
console.log(cat1.name);