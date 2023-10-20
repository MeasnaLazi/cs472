const Student = require("../models/student");

const getStudents= (req, res, next) => {
    let students= Student.getStudents();

    res.status(200).json(students);
}

const getStudentById= (req, res, next) => {
    try {
        let id= parseInt(req.params.id);
        let student= Student.getStudentById(id);
        
        res.status(200).json(student);
    } catch(e) {
        next({code: 404, message: e.message});
    }
}

const createStudent= (req, res, next) => {
    let { id, name, program }= req.body;

    if (id && name, program) {
        let student= new Student(id, name, program);
        Student.createStudent(student);

        res.status(201).json(student);
    } else {
        next({code: 500, message: "Please input all required field!"});
    }
}

const deleteStudent= (req, res, next) => {
    try {
        let id= parseInt(req.params.id);
        let student= Student.deleteStudentById(id);
        
        res.status(200).json(student);
    } catch(e) {
        next({code: 404, message: e.message});
    }
}

const updateStudent= (req, res, next) => {
    try {
        let id= parseInt(req.params.id);
        let { name, program }= req.body;
        let student= Student.updateStudent(id, name, program);
  
        res.status(200).json(student);
    } catch(e) {
        next({code: 404, message: e.message});
    }
}

const filterByProgram= (req, res, next) => {
    let program= req.query.program ?? "";
    console.log("progam: " + program);
    let students= Student.filterByProgram(program);

    res.status(200).json(students);
}

module.exports= {
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent,
    filterByProgram
};