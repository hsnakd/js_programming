let elements = ['James', 'Daniel', 1, 2, 3, 4, true, false, 5.5];

console.log(elements);
console.log(elements.length);

console.log('--------------------------------');

let students = ['Shay', 'Yulia', 'Nijat', 'Belinda'];

console.log(students);
console.log(students[0]);
console.log(students[1]);

students[2] = 'Breanna';

console.log(students);

console.log('--------------------------------');

let numbers = [45, 55, 65, 75, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('--------------------------------');

for(let each of numbers){
    console.log(each);
}

console.log('--------------------------------');

let employees = ['Aygun', 'Musabekhon', 'Nasera', 'Betul'];

console.log(employees);

employees.push('Isabella');

console.log(employees);

employees.unshift('Daniel');

console.log(employees);

employees.unshift('Ahmed');
employees.unshift('Ahmed');
employees.unshift('Ahmed');
employees.unshift('Ahmed');

console.log(employees);

employees.splice(1, 3);

console.log(employees);

employees.shift();

console.log(employees);

employees.pop();

console.log(employees);



console.log('----------------------------------------------------------------');
console.log('----------------------------------------------------------------');
console.log('----------------------------------------------------------------');



let scores = new Array(); // creates an empty Array
let numbersArray = new Array(10); // creates an array with size 10
let emptyArray = [];
let myNumbers = new Array(1, 3, 6, 7, 10);
let colors = ['red', 'green', 'blue'];

console.log(scores);            // []
console.log(numbersArray);           // [ <10 empty items> ]
console.log(emptyArray);        // []
console.log(myNumbers);         // [ 1, 3, 6, 7, 10 ]
console.log(colors);            // [ 'red', 'green', 'blue' ]

// get second value of colors array
console.log(colors[1]);         // green

// add element to the end of Array
colors.push('white');
colors.push(5)
console.log(colors);            // [ 'red', 'green', 'blue', 'white', 5 ]

// how to add to the beginning of array
colors.unshift("orange");
console.log(colors);            // [ 'orange', 'red', 'green', 'blue', 'white', 5 ]

// LOOPS with Arrays
console.log('====LOOPS with Arrays=====');
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}
console.log('=========');

for (const value of colors) {
    console.log(value);
}
console.log('====forEach=====');

colors.forEach(element => {
    console.log(element);
})
console.log('====multiple type of Data====');

// can we add multiple type of Data ? YES
let soupOfData = [5, 'cydeo', true, undefined, colors];
soupOfData.forEach(element => {
    console.log(typeof element);
    console.log(element);
    console.log('=========');
})