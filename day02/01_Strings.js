let schoolName = 'CYDEO SCHOOL'

console.log(schoolName.length);
console.log(schoolName.length -1); // 0 ~ 11

console.log(schoolName[0]);
console.log(schoolName[11]);

console.log('--------------------------------------');

schoolName.toLowerCase(); 
console.log(schoolName);      // 'CYDEO SCHOOL'

schoolName = schoolName.toLowerCase(); 
console.log(schoolName);      // 'cydeo school'


schoolName = schoolName.toUpperCase(); 
console.log(schoolName);      // 'CYDEO SCHOOL'

console.log('--------------------------------------');

let expectedText = 'JavaScript'

let actualText = 'javascript'

console.log( expectedText.toLowerCase() === actualText.toLowerCase());  // ignoreCaseSensitivity

console.log(expectedText);
console.log(actualText);

console.log('--------------------------------------');

let s = 'Python Python'

// s = s.replace('Python', 'JavaScript');

s = s.replace(/Python/g, 'JavaScript'); // global flag

console.log(s);

console.log('--------------------------------------');

let str = 'ABCDE12345EFGHI890JKLMN12345UIOYTR';

str = str.replace(/\d/g, '');

console.log(str);

console.log('--------------------------------------');

let w = 'JavaScript';

for (let i = 0; i < w.length; i++) {
   console.log(w[i]);
}

console.log('--------------------------------------');

let email = 'cydeoschool@gmail.com';

let domain = email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'));

console.log(domain);

console.log('--------------------------------------');

let employeeName = 'James';
let employeeAge = 35;

console.log('Employee name is: ' + employeeName);
console.log('Employee age is: ' + employeeAge);

console.log('My name is ' + employeeName + ', and I am ' + employeeAge + ' years old.');
console.log(`My name is ${employeeName}, and I am ${employeeAge} years old.`);
// backtick character need to be used instead of '' or ""


let str1 = 'Java';
let str2 = "Script";
let str3 = `awesome`;

let result;

result = "The result variable is : "+ str1 + ' ' + str2 + ' ' + str3 ; // Like Java

console.log(result);

result = `The result variable is : ${str1} ${str2} ${str3}`;
console.log(result);