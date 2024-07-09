function greetings(){
    console.log('Hello Programmers');
    console.log('Hello Cydeo');
    console.log('Hello World');
}


greetings();
console.log('------------------------------------------------------------');

greetings();
console.log('------------------------------------------------------------');

greetings();
console.log('Test Completed successfully');

console.log('------------------------------------------------------------');


function displayValue(value = 'Unknown value'){
    console.log(`The value is ${value}`);
}


displayValue(100);

displayValue('JavaScript');

displayValue();

console.log('------------------------------------------------------------');

function square(number){
    let result = number ** 2;
    return result;
}

let num = square(10);

console.log(`The square is : ${num}`);



console.log('------------------------------------------------------------');
console.log('------------------------------------------------------------');
console.log('------------------------------------------------------------');





// no access modifier needed, no method overloading

// create the function
function add(a,b) {
    console.log("Total is : "+(a+b) );
}

// use the function -- call?
add(10,20)

// return type functions
function multiply(a,b) {
    return (a*b);
}

console.log('The result of multiplication : '+ multiply(10,20));

let divide = function (a,b) {
    return a/b;
}

console.log(divide(20,10));

let anyName = divide;

console.log(anyName(20,10));

function average(a,b,fn) {
    return fn(a,b)/2;
}
function sum(a,b) {
    return (a+b);
}
let averageOfTotal = average(10,20,sum);
console.log(averageOfTotal);

let averageOfMultiply = average(10,20,multiply);
console.log(averageOfMultiply);
