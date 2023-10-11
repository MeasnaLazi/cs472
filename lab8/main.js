// /* #Question 1: Object Literal */
let student = {
    firstName: "",
    lastName: "",
    grades: [],
    // inputNewGrade(newGrade) {
    //     this.grades.push(newGrade);
    // },
    // computeAverageGrade() {
    //     return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    // }
}

Object.getPrototypeOf(student).computeAverageGrade = function() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
}

Object.getPrototypeOf(student).inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
}

let stu1 = Object.create(student);
stu1.firstName = "One";
stu1.lastName = "1";
stu1.inputNewGrade(10);
stu1.inputNewGrade(15);
stu1.inputNewGrade(20);

let stu2 = Object.create(student);
stu2.firstName = "Two";
stu2.lastName = "2";
stu2.grades = [5, 9, 12];

let stu3 = Object.create(student);
stu3.firstName = "a";
stu3.lastName = "b";
stu3.grades = [18, 15, 22];

let students = [stu1, stu2, stu3];
let allStudentsAverageGrade = students.map(stu => stu.computeAverageGrade())
                                    .reduce((a, b) =>  a + b, 0);
console.log("allStudentsAverageGrade: " + allStudentsAverageGrade);




// /* #Question 2: Construction Function */
// function Student(firstName, lastName, grades) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grades = grades;
// }

// Student.prototype.inputNewGrade = function(newGrade) {
//     this.grades.push(newGrade);
// }

// Student.prototype.computeAverageGrade = function() {
//     return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
// }

// let stu1 = new Student("One", "1", []);
// stu1.inputNewGrade(10);
// stu1.inputNewGrade(15);
// stu1.inputNewGrade(20);

// let stu2 = new Student("Two", "2", [5, 9, 12]);
// let stu3 = new Student("Three", "3", [22, 15, 18]);

// let students = [stu1, stu2, stu3];
// let allStudentsAverageGrade = students.map(stu => stu.computeAverageGrade())
//                                     .reduce((a, b) =>  a + b, 0);
// console.log("allStudentsAverageGrade: " + allStudentsAverageGrade);



/* #Question 3: Add new method name sorted to built-in Array */
// Array.prototype.sort = function() {
//     let newArr = this;
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = i; j < newArr.length; j++) {
//             if (newArr[i] > newArr[j]) {
//                 let tem = newArr[i];
//                 newArr[i] = newArr[j];
//                 newArr[j] = tem;
                
//                 continue;
//             }
//         }
//     }

//     return newArr;
// }

// let sortedArr = [22, 15, 18].sort();
// console.log("sortedArr: " + sortedArr);




