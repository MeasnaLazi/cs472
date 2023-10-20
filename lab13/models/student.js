let students= [
    { id: 1, name: "Lazi", program: "compro" },
    { id: 2, name: "Peter", program: "ba" },
    { id: 3, name: "Sovann", program: "compro" },
];

class Student {

    constructor(id, name, program) {
        this.id= parseInt(id);
        this.name= name;
        this.program= program;
    }

    update(name, program) {
        this.name= name;
        this.program= program;
    }

    static getStudents() {
        return students;
    }

    static getStudentById(id) {
        let student= students.find(s => s.id == id);
        if (!student) {
            throw Error("Student not found!");
        }
        return student;
    }

    static createStudent(student) {
        students.push(student);
    }

    static deleteStudentById(id) {
        let index= students.findIndex(s => s.id == id);
        let deletedStudent;

        if (index > -1) {
            deletedStudent= students[index];
            students.splice(index, 1);
        } else {
            throw Error("Student not found!");
        }

        return deletedStudent;
    }

    static updateStudent(id, name, program) {
        let findStudent= students.find(s => s.id == id);

        if (findStudent) {
            findStudent.update(name, program);
        } else {
            throw Error("Student not found!");
        }

       return findStudent;
    }

    static filterByProgram(program) {
        return students.filter(stu => stu.program == program);
    }
}

module.exports = Student;