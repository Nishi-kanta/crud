const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get('/', studentController.getAllStudents);
router.post('/student', studentController.createStudent);
router.get('/read/:id', studentController.getSingleStudent);
router.put('/update/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
