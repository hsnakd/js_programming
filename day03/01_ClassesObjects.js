
class Employee{
    
    constructor(employeeName = 'Unknown', age = 0, gender = 'Unknown', salary = 50_000){
        this.employeeName = employeeName;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }

    work(){
        console.log(`${this.employeeName} is working`);
    }

    static myStaticMethod(){

    }

    static myStaticVariable = '';

}
let employee0 = new Employee();
console.log(employee0);

let employee1 = new Employee('Ricky', 35, 'Female', 100_000);
console.log(employee1);


let employee2 = new Employee();
console.log(employee2);


let employee3 = new Employee('Michael');
console.log(employee3);


let employee4 = new Employee('Josh', 40);

console.log(employee4);


employee1.work();
employee3.work();