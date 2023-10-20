const studentController = require("../controllers/student_controller")
const express = require("express");
const router = express.Router();

router.get("/", studentController.getStudents);
router.get("/detail/:id", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.delete("/:id", studentController.deleteStudent);
router.put("/:id", studentController.updateStudent);
router.get("/filter", studentController.filterByProgram);

module.exports = router;
