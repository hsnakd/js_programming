
class Person{

    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

}


class Student extends Person{

    constructor(name, age, gender, studentId){
        super(name, age, gender);
        this.studentId = studentId;
    }

    study(){
        console.log(`${this.name} is studying`);
    }

}

class Teacher extends Person{

    teach(){
        console.log(`${this.name} is teaching`);
    }

}


let student = new Student('Henry', 25, 'Male', 'A01');

let teacher = new Teacher("Smith", 45, 'Male');


console.log(student);
console.log(teacher);

student.eat();
teacher.eat();

student.study();
teacher.teach();
