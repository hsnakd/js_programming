console.log('====For Loop with Var Statement before ES6=====');
// old type of declaring variables in JS: before ES6
for(var j = 0 ; j <= 5 ; j++ ){
    console.log(j);
}
console.log('====Var Statement=====');
console.log(j); // var statement creates a global scope variable declaration

console.log('====For Loop=====');
// for loop, while loop and do while loop
for (let i = 0; i < 5; i++) { // let creates a local scope variable
    console.log('Wooden Spoon ' + (i+1));
}

console.log('----------------------');

for (let i = 5; i <= 15; i++) { 
    console.log(i);
}

console.log('----------------------');

for (let i = 0; i < 5; i++) { 
    console.log('Hello World');
    console.log('Wooden Spoon');
    console.log('------------');
}

console.log('----------------------');

for (let i = 1; i < 6; i++) { 
    console.log(i);
    if (i==3) {
        break;  // exits the current loop
    }
}


console.log('----------------------');

for (let i = 1; i < 11; i++) { 
    if (i===3 || i===7) {
        continue;  // skips the current iteration number
    }
    console.log(i);
}

console.log('----------------------');

// tabnine
// create a loop with 10 iterations starting from 10 to 20
for (let i = 10; i <= 20; i++) { 
    console.log(i);
}

console.log('----------------------');

// tabnine
// create an array of string and add 10 students names to it and write them to console (for loop)
let students = ['John', 'Jane', 'Bob', 'Alice', 'David', 'Emily', 'Michael', 'Sophia', 'Chloe', 'Olivia'];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log('----------------------');



console.log('----------------------');


// while loops
console.log('====While Loop=====');
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

console.log('====Do While Loop=====');
let z = 0;

do {
    console.log(z);
    z++;
} while (z < 3);